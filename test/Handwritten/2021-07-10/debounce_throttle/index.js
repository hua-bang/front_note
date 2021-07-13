/**
 * 
 * @param {*} fn 方法
 * @param {*} delay 毫秒数
 * @param {*} immediate true为立即执行 
 * @returns fn
 */
function debounce(fn, delay, immediate = false) {
  let timer;
  return function (...args) {
    const context = this;
    
    if (timer) {
      clearTimeout(timer);
    }

    if (immediate) {

      if (!timer) {
        fn.call(context, ...args);
      }

      timer = setTimeout(() => {
        timer = null;
      }, delay)

    } else {

      timer = setTimeout(() => {
        fn.call(context, ...args);
      }, delay);

    }
  }
}

function throttle(fn, delay) {
  let timer;

  return function (...args) {
    const context = this;

    if (!timer) {
      fn.call(context, ...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  }
}

let log = function () {
  console.log("log");
}


document.querySelector("#debounceInput1")
  .addEventListener("input", debounce(log, 1000));
document.querySelector("#debounceInput2")
  .addEventListener("input", debounce(log, 1000, true));
document.querySelector("#throttleInput")
  .addEventListener("input", throttle(log, 1000));