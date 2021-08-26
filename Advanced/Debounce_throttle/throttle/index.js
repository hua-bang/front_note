function throttle(fn, delay = 1000) {
  let timer;
  return function (...args) {
    const context = this;
    if (!timer) {
      fn.call(context, ...args);
      timer = setTimeout(() => {
        timer = null
      }, delay);
    }
  };
}