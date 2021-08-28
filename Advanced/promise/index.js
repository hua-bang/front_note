const PENDING_STATUS = "pending";
const FULFILLED_STATUS = "fulfilled";
const REJECTED_STATUS = "rejected";

class TPromise {
  constructor(exector) {
    this.status = PENDING_STATUS;
    this.value = null;
    this.reason = null;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    let resolve = (value) => {
      if (this.status === PENDING_STATUS) {
        this.status = FULFILLED_STATUS;
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => {
          fn();
        });
      }
    }

    let reject = (reason) => {
      if (this.status === PENDING_STATUS) {
        this.status = REJECTED_STATUS;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => {
          fn();
        });
      }
    }

    try {
      exector(resolve, reject);
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {

    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === "function" ? onRejected : (err) => { throw err };

    let promise = new TPromise((resolve, reject) => {

      if (this.status === PENDING_STATUS) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let res = onFulfilled(this.value);
              resolvePromise(promise, res, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let res = onRejected(this.reason);
              resolvePromise(promise, res, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      } else if (this.status === FULFILLED_STATUS) {
        setTimeout(() => {
          try {
            let res = onFulfilled(this.value);
            resolvePromise(promise, res, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      } else if (this.status === REJECTED_STATUS) {
        setTimeout(() => {
          try {
            let res = onRejected(this.reason);
            resolvePromise(promise, res, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
    });

    return promise;
  }
}

function resolvePromise(promise, result, resolve, reject) {
  if (result === promise) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }
  let called;
  if (result !== null && (typeof result === 'object' || typeof result === 'function')) {
    try {
      let then = result.then;
      if (typeof then === "function") {
        then.call(result, (y) => {
          if (called) return;
          called = true;
          resolvePromise(promise, y, resolve, reject);
        }, err => {
          // 成功和失败只能调用一个
          if (called) return;
          called = true;
          reject(err);// 失败了就失败了
        })
      } else {
        resolve(x); // 直接成功即可
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(result);
  }
}


let p1 = new TPromise((resolve, reject) => {
  console.log("test");
  setTimeout(() => {
    resolve("123");
  })
}).then(res => {
  console.log(res);
  return 1;
}).then(res => {
  console.log(res);
  return 1;
})

TPromise.resolve = function (val) {
  return TPromise(resolve => {
    resolve(val);
  })
}

TPromise.reject = function (reason) {
  return TPromise((resolve, rejected) => {
    rejected(reason);
  })
}

TPromise.race = function (promiseArr) {
  return TPromise((resolve, reject) => {
    promiseArr.forEach(promise => {
      promise.then(resolve, reject);
    })
  });
}

TPromise.all = function (promiseArr) {
  return TPromise((resolve, reject) => {
    let result = [];
    promiseArr.forEach(promise => {
      promise.then(res => {
        result.push(res);
        if (result.length === promiseArr.length) {
          resolve(result);
        }
      }, reject);
    });
  })
}

// let p1 = new Promise((resolve, reject) => {
//   // some code
//   resolve(0);
// }).then((res) => {
//   console.log(res);
// }, (err) => {

// })