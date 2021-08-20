exports.compose = (middlewares = []) => {
  let count = 0;
  return function next() {
    if (count !== middlewares.length) {
      middlewares[count++](next);
    }
  };
}