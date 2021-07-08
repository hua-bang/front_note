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