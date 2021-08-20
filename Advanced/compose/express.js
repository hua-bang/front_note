exports.compose = (middlewares = []) => {
  return async () => {
    let count = 0;
    async function next() {
      if (count === middlewares.length) {
        return Promise.resolve();
      } else {
        return Promise.resolve(middlewares[count++](next));
      }
    }
    return await next();
  };
}