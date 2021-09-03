console.log(exports === module.exports);
module.exports = {
  a: 123
}
module.exports = {
  a: 123
}
console.log(exports === module.exports);