const fs = require("fs");

// fs.mkdir("test", (err, res) => {
//   console.log(err, res);
// })

fs.rename("test", "demo", (err, res) => {
  console.log(res);
});