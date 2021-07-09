## working-with-file-descriptors-in-nodejs

在与位于文件系统中的文件进行交互之前，需要先获取文件的描述符。

文件描述符是使用 `fs` 模块提供的 `open()` 方法打开文件后返回的：

注意异步和同步，还有error-first

```js
const fs = require("fs");
fs.open("xxx/xx.txt", "r", (err, fd) => {
    // do somethings;
})
```

其他常用的标志有：

- `r+` 打开文件用于读写。
- `w+` 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
- `a` 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
- `a+` 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。

```js
const fs = require('fs')

try {
  const fd = fs.openSync('/Users/joe/test.txt', 'r')
} catch (err) {
  console.error(err)
}
```

一旦获得文件描述符，就可以以任何方式执行所有需要它的操作，例如调用 `fs.open()` 以及许多与文件系统交互的其他操作。

```js
fs.stat("./EventEmitter.js", (err, stats) => {
  console.log(stats);
})
```

能够获取文件的信息

- 使用 `stats.isFile()` 和 `stats.isDirectory()` 判断文件是否目录或文件。
- 使用 `stats.isSymbolicLink()` 判断文件是否符号链接。
- 使用 `stats.size` 获取文件的大小（以字节为单位）