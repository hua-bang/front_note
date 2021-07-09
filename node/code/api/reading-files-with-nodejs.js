const fs = require('fs')

fs.readFile('./EventEmitter.js', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

console.log("1");

const data = fs.readFileSync('./EventEmitter.js', 'utf8')
console.log("2", data);
console.log("3");