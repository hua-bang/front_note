# Node.js 文件路径

路径

```js
const path = require("path");
```

## 从路径中获取信息

给定一个路径，可以获得以下信息

- dirname: 父文件夹
- basename:获取文件名部分
- extname: 获取文件的扩展名

可以通过为 `basename` 指定第二个参数来获取不带扩展名的文件名：

```javascript
path.basename(notes, path.extname(notes)) //notes
```

## 使用路径

可以使用 `path.join()` 连接路径的两个或多个片段：

```javascript
const name = 'joe'
path.join('/', 'users', name, 'notes.txt') //'/users/joe/notes.txt'
```

可以使用 `path.resolve()` 获得相对路径的绝对路径计算：

```javascript
path.resolve('joe.txt') //'/Users/joe/joe.txt' 如果从主文件夹运行。
```

在此示例中，Node.js 只是简单地将 `/joe.txt` 附加到当前工作目录。 如果指定第二个文件夹参数，则 `resolve` 会使用第一个作为第二个的基础：

```javascript
path.resolve('tmp', 'joe.txt') //'/Users/joe/tmp/joe.txt' 如果从主文件夹运行。
```

如果第一个参数以斜杠开头，则表示它是绝对路径：

```javascript
path.resolve('/etc', 'joe.txt') //'/etc/joe.txt'
```

`path.normalize()` 是另一个有用的函数，当包含诸如 `.`、`..` 或双斜杠之类的相对说明符时，其会尝试计算实际的路径：

```javascript
path.normalize('/users/joe/..//test.txt') //'/users/test.txt'
```

解析和规范化都不会检查路径是否存在。 其只是根据获得的信息来计算路径。