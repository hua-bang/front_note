
const a1 = require("./module/a");
const a2 = require("./module/a");
// 表明加载的都是一样的
console.log(a1 === a2);

const {a,b} = require("./module/b");
console.log(a,b);

