class HPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  constructor(exector) {
    this.status = HPromise.PENDING;
    this.value = "";
    this.reason = "";
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    try {
      exector(this.resolve.bind(this), this.reject.bind(this));
    } catch (err) {
      this.reject(err);
    }
  }

  resolve(value) {
    if (this.status === HPromise.PENDING) {
      this.status = HPromise.FULFILLED;
      this.value = value;
      setTimeout(() => {
        this.onResolvedCallbacks.forEach(fn => {
          fn(value);
        })
      });
    }
  }

  reject(reason) {
    if (this.status === HPromise.PENDING) {
      this.status = HPromise.REJECTED;
      this.reason = reason;
      setTimeout(() => {
        this.onRejectedCallbacks.forEach(fn => {
          fn(reason);
        })
      });
    }
  }

  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== "function") {
      onFulfilled = () => this.value;
    }

    if (typeof onRejected !== "function") {
      onRejected = () => this.value;
    }

    let promise = new HPromise((resolve, reject) => {
      if (this.status === HPromise.PENDING) {
        this.onResolvedCallbacks.push(
          (value) => {
            this.parse(promise, onFulfilled(value), resolve, reject);
          }
        );
        this.onRejectedCallbacks.push(
          (reason) => {
            this.parse(promise, onRejected(reason), resolve, reject);
          }
        );
      }


      if (this.status === HPromise.FULFILLED) {
        setTimeout(() => {
          this.parse(promise, onFulfilled(this.value), resolve, reject);
        })
      }
      if (this.status === HPromise.REJECTED) {
        setTimeout(() => {
          this.parse(promise, onRejected(this.reason), resolve, reject);
        });
      }
    });

    return promise;
  }

  parse(promise, result, resolve, reject) {
    if (promise === result) {
      throw new TypeError("Chain cycle detected");
    }
    try {
      if (result instanceof HPromise) {
        result.then(resolve, reject);
      } else {
        resolve(result);
      }
    } catch (err) {
      reject(err);
    }
  }

  static resolve(value) {
    return new HPromise((resolve, reject) => {
      if (value instanceof HPromise) {
        value.then(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
      } else {
        resolve(value);
      }
    })
  }

  static reject(error) {
    return new HPromise((resolve, rejected) => {
      rejected(error);
    })
  }

  static all(promiseArr) {
    return new HPromise((resolve, reject) => {
      let arr = new Array(promiseArr.length);
      let count = 0;
      promiseArr.forEach((promise, index) => {
        if (promise instanceof HPromise) {
          promise.then(res => {
            arr[index] = res;
            count++;
            if (count === promiseArr.length) {
              resolve(arr);
            }
          }, (err) => {
            reject(err);
          });
        } else {
          arr[index] = promise;
          count++;
          if (count === promiseArr.length) {
            resolve(arr);
          }
        }
      })
    })
  }

  static race(promiseArr) {
    return new HPromise((resolve, reject) => {
      promiseArr.forEach((promise, index) => {
        if (!(promise instanceof HPromise)) {
          return;
        }
        promise.then(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      })
    })
  }
}
