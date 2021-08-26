function debounce(fn, delay=1000, immediate = false) {
  let timer;
  return function (...args) {
    const context = this;
    if(timer)
      clearTimeout(timer)
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
      }, delay)
    }
  };
}