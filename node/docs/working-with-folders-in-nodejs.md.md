# working-with-folders-in-nodejs

Node.js 的 `fs` 核心模块提供了许多便捷的方法用于处理文件夹。

### 检查文件夹是否存在

使用 `fs.access()` 检查文件夹是否存在以及 Node.js 是否具有访问权限。

## 创建新的文件夹

使用 `fs.mkdir()` 或 `fs.mkdirSync()` 可以创建新的文件夹。

// 同步和异步的区别

## 读取目录的内容

使用 `fs.readdir()` 或 `fs.readdirSync()` 可以读取目录的内容。

这段代码会读取文件夹的内容（全部的文件和子文件夹），并返回它们的相对路径：

```javascript
const fs = require('fs')
const path = require('path')

const folderPath = '/Users/joe'

fs.readdirSync(folderPath)
```

可以获取完整的路径：

```javascript
fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)
})
```

也可以过滤结果以仅返回文件（排除文件夹）：

```javascript
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile()
}

fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)
})
.filter(isFile)
```

## 重命名文件夹

使用 `fs.rename()` 或 `fs.renameSync()` 可以重命名文件夹。 第一个参数是当前的路径，第二个参数是新的路径：

```javascript
const fs = require('fs')

fs.rename('/Users/joe', '/Users/roger', err => {
  if (err) {
    console.error(err)
    return
  }
  //完成
})
```

`fs.renameSync()` 是同步的版本：

```javascript
const fs = require('fs')

try {
  fs.renameSync('/Users/joe', '/Users/roger')
} catch (err) {
  console.error(err)
}
```

## 删除文件夹

使用 `fs.rmdir()` 或 `fs.rmdirSync()` 可以删除文件夹。

删除包含内容的文件夹可能会更复杂。

在这种情况下，最好安装 [`fs-extra`](https://www.npmjs.com/package/fs-extra) 模块，该模块非常受欢迎且维护良好。 它是 `fs` 模块的直接替代品，在其之上提供了更多的功能。

在此示例中，需要的是 `remove()` 方法。

使用以下命令安装：

```bash
npm install fs-extra
```

并像这样使用它：

```javascript
const fs = require('fs-extra')

const folder = '/Users/joe'

fs.remove(folder, err => {
  console.error(err)
})
```

也可以与 promise 一起使用：

```javascript
fs.remove(folder)
  .then(() => {
    //完成
  })
  .catch(err => {
    console.error(err)
  })
```

或使用 async/await：

```javascript
async function removeFolder(folder) {
  try {
    await fs.remove(folder)
    //完成
  } catch (err) {
    console.error(err)
  }
}

const folder = '/Users/joe'
removeFolder(folder)
```