# Node.js 事件触发器

如果你在浏览器中使用 JavaScript，则你会知道通过事件处理了许多用户的交互：鼠标的单击、键盘按钮的按下、对鼠标移动的反应等等。

后端，Node.js提供了event类似的模块构建系统。

```js
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
```

公开了`on`和`emit`方法

- emit用于触发事件
- on用于添加回调函数。

示例：

```js
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("start");
});

new Promise(resolve => {
  resolve("promise");
}).then(res => {
  console.log(res);
});

eventEmitter.emit("start");
console.log("end");
```

EventEmitter 对象还公开了其他几个与事件进行交互的方法，例如：

- once:添加单个监听器
- removeLitener() /off()
- removeAllLiteners()