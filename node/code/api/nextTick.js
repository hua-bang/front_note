console.log("1");

setImmediate(() => {
  console.log("7");
}, 0)

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve("3").then(res => {
  console.log(res);
})

process.nextTick(() => {
  console.log("4");
})

console.log("5");