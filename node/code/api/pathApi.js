const path = require("path");
console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__dirname));
console.log(path.basename(__dirname));

console.log(path.resolve("./test"));