# Node.js Buffer

### buffer

Buffer是内存区域，标识V8JS引擎外部分配的固定大小的内存块（无法调整大小）。

可以将 buffer 视为整数数组，每个整数代表一个数据字节。

## 为什么需要 buffer？

Buffer 被引入用以帮助开发者处理二进制数据，在此生态系统中传统上只处理字符串而不是二进制数据。

Buffer 与流紧密相连。 当流处理器接收数据的速度快于其消化的速度时，则会将数据放入 buffer 中。

一个简单的场景是：当观看 YouTube 视频时，红线超过了观看点：即下载数据的速度比查看数据的速度快，且浏览器会对数据进行缓冲。

## 如何创建 buffer

使用 [`Buffer.from()`](http://nodejs.cn/api/buffer.html#buffer_buffer_from_buffer_alloc_and_buffer_allocunsafe)、[`Buffer.alloc()`](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_alloc_size_fill_encoding) 和 [`Buffer.allocUnsafe()`](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_allocunsafe_size) 方法可以创建 buffer。

```javascript
const buf = Buffer.from('Hey!')
```

- [`Buffer.from(array)`](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_array)
- [`Buffer.from(arrayBuffer[, byteOffset[, length\]])`](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_arraybuffer_byteoffset_length)
- [`Buffer.from(buffer)`](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_buffer)
- [`Buffer.from(string[, encoding\])`](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_string_encoding)

也可以只初始化 buffer（传入大小）。 以下会创建一个 1KB 的 buffer：

```javascript
const buf = Buffer.alloc(1024)
//或
const buf = Buffer.allocUnsafe(1024)
```

虽然 `alloc` 和 `allocUnsafe` 均分配指定大小的 `Buffer`（以字节为单位），但是 `alloc` 创建的 `Buffer` 会被使用零进行初始化，而 `allocUnsafe` 创建的 `Buffer` 不会被初始化。 这意味着，尽管 `allocUnsafe` 比 `alloc` 要快得多，但是分配的内存片段可能包含可能敏感的旧数据。

当 `Buffer` 内存被读取时，如果内存中存在较旧的数据，则可以被访问或泄漏。 这就是真正使 `allocUnsafe` 不安全的原因，在使用它时必须格外小心。

## 使用 buffer

### 访问 buffer 的内容

Buffer（字节数组）可以像数组一样被访问：

```javascript
const buf = Buffer.from('Hey!')
console.log(buf[0]) //72
console.log(buf[1]) //101
console.log(buf[2]) //121
```

这些数字是 Unicode 码，用于标识 buffer 位置中的字符（H => 72、e => 101、y => 121）。

可以使用 `toString()` 方法打印 buffer 的全部内容：

```javascript
console.log(buf.toString())
```

### 获取 buffer 的长度

使用 `length` 属性：

```javascript
const buf = Buffer.from('Hey!')
console.log(buf.length)
```

### 迭代 buffer 的内容

```javascript
const buf = Buffer.from('Hey!')
for (const item of buf) {
  console.log(item) //72 101 121 33
}
```

### 更改 buffer 的内容

可以使用 `write()` 方法将整个数据字符串写入 buffer：

```javascript
const buf = Buffer.alloc(4)
buf.write('Hey!')
```

就像可以使用数组语法访问 buffer 一样，你也可以使用相同的方式设置 buffer 的内容：

```javascript
const buf = Buffer.from('Hey!')
buf[1] = 111 //o
console.log(buf.toString()) //Hoy!
```

### 复制 buffer

使用 `copy()` 方法可以复制 buffer：

```javascript
const buf = Buffer.from('Hey!')
let bufcopy = Buffer.alloc(4) //分配 4 个字节。
buf.copy(bufcopy)
```

默认情况下，会复制整个 buffer。 另外的 3 个参数可以定义开始位置、结束位置、以及新的 buffer 长度：

```javascript
const buf = Buffer.from('Hey!')
let bufcopy = Buffer.alloc(2) //分配 2 个字节。
buf.copy(bufcopy, 0, 0, 2)
bufcopy.toString() //'He'
```

### 切片 buffer

如果要创建 buffer 的局部视图，则可以创建切片。 切片不是副本：原始 buffer 仍然是真正的来源。 如果那改变了，则切片也会改变。

使用 `slice()` 方法创建它。 第一个参数是起始位置，可以指定第二个参数作为结束位置：

```javascript
const buf = Buffer.from('Hey!')
buf.slice(0).toString() //Hey!
const slice = buf.slice(0, 2)
console.log(slice.toString()) //He
buf[1] = 111 //o
console.log(slice.toString()) //Ho
```