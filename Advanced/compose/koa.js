class Koa {
  constructor() {
    this.middlewares = [];
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  compose() {
    let count = 0;
    const context = this;
    return async function () {
      function next() {
        let length = context.middlewares.length;
        if (count === length) {
          return Promise.resolve();
        } else {
          return Promise.resolve(context.middlewares[count++](next));
        }
      };
      return await next();
    };
  };

  run() {
    return this.compose()();
  }
}

const app = new Koa();

app.use(async (next) => {
  console.log("1 begin");
  await sleep(2000);
  await next();
  console.log("1 end");
});

app.use(async (next) => {
  console.log("2 begin");
  await sleep(2000);
  await next();
  console.log("2 end");
});

function sleep(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

app.run();
