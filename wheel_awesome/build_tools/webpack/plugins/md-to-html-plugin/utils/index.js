function randomNum() {
  return new Date().getTime() + parseInt(Math.random() * 10000);
}

module.exports = {
  randomNum
}