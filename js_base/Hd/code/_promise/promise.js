class HPromise {
    static PENDING = "pending";
    static FULFILLED = "fulfilled";
    static REJECTED = "rejected";

    // executor 执行者
    constructor(executor) {
        this.status = HPromise.PENDING;
        this.value = null;
        this.callbacks = [];
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (err) {
            this.reject(err);
        }
    }

    resolve(value) {
        if (this.status === HPromise.PENDING) {
            this.value = value;
            this.status = HPromise.FULFILLED;
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onFulfilled(value);
                })
            })
        }
    }

    reject(reason) {
        if (this.status === HPromise.PENDING) {
            this.status = HPromise.REJECTED;
            this.value = reason;
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onRejected(reason);
                })
            })
        }
    }

    then(onFulfilled = value => value, onRejected = error => error) {
        return new HPromise((resolve, reject) => {
            if (this.status === HPromise.PENDING) {
                this.callbacks.push({
                    onFulfilled: value => {
                        try {
                            let res = onFulfilled(value);
                            if (res instanceof HPromise) {
                                res.then(v => {
                                    resolve(v);
                                })
                            } else {
                                resolve(res);
                            }
                        } catch (err) {
                            reject(err);
                        }
                    },
                    onRejected: value => {
                        try {
                            let res = onRejected(value);
                            if (res instanceof HPromise) {
                                res.then(resolve, reject);
                            } else {
                                resolve(res);
                            }
                        } catch (err) {
                            console.log(err);
                            reject(err);
                        }
                    }
                });
            }
            if (this.status === HPromise.FULFILLED) {
                setTimeout(() => {
                    try {
                        let res = onFulfilled(this.value);
                        if (res instanceof HPromise) {
                            res.then(resolve, reject);
                        } else {
                            resolve(res);
                        }
                    } catch (err) {
                        reject(err);
                    }
                })
            }
            if (this.status === HPromise.REJECTED) {
                setTimeout(() => {
                    try {
                        let res = onRejected(this.value);
                        if (res instanceof HPromise) {
                            res.then(resolve, reject);
                        } else {
                            resolve(res);
                        }
                    } catch (err) {
                        reject(err);
                    }
                })
            }
        })
    }
}