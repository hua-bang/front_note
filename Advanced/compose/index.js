const { compose } = require("./express");
const middlewares = [
  next => {
    console.log('1 start')
    next()
    console.log('1 end')
  },
  next => {
    console.log('2 start')
    next()
    console.log('2 end')
  }
]
const func = compose(middlewares);
func();