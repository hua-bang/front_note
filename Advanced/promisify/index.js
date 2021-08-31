const fs = require("fs");
const readFile = fs.readFile;

// readFile("./index.js", (err, data) => {
//   console.log(data);
// })

let readFileAsync = promisify(readFile);

readFileAsync("./index.js")
  .then(res => {
    console.log("res");
    console.log(res);
  }, err => {
    console.log(err);
  });

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const context = this;
      fn.call(context, ...args, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      })
    })    
  }
}