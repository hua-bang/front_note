console.log('%o', module)
const function2 = () => console.trace()
const function1 = () => function2()
function1()
console.log('\x1b[33m%s\x1b[0m', '你好')

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 1000)