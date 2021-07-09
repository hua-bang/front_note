const fs = require("fs");

// fs.readdir("./", (err, fileArr) => {
//   fileArr.forEach(file => {
//     fs.open(file, 'r', (e, fd) => {
//       console.log(file,fd);
//     })  
//   })
// })

fs.stat("./EventEmitter.js", (err, stats) => {
  console.log(stats);
})
