#### 自己手写promise

思路：按照Promise函数参考

Promise默认中有状态以及返回的值，初时试默认状态为pending value为空

声明promise类

```js
class HPromise {
    static PENDING = "pending";
    static FULFILLED = "fulfilled";
    static REJECTED = "rejected";
    // executor 执行者
    constructor(executor) {
        this.status = HPromise.PENDING;
        this.value = null;
    }
}
```

#### 绑定this

```js
class HPromise {
    static PENDING = "pending";
    static FULFILLED = "fulfilled";
    static REJECTED = "rejected";
    // executor 执行者
    constructor(executor) {
        this.status = HPromise.PENDING;
        this.value = null;
        executor(this.resolve.bind(this),this.reject.bind(this));
    }
	resolve(value) {
        //如果是由于上方的executor函数执行的话，则调用函数的主体即为window，故this为undefined
        this.value = value;
        this.status = HPromise.FULFILLED;
    }
	reject(reason) {
        this.value = reason;
        this.status = HPromise.REJECTED;
    }
}
new HPromise((resolve,reject) => {
	resolve(123)
})
```

##### 状态保护和异常捕获

```js
class HPromise {
    static PENDING = "pending";
    static FULFILLED = "fulfilled";
    static REJECTED = "rejected";
    // executor 执行者
    constructor(executor) {
        this.status = HPromise.PENDING;
        this.value = null;
        try{
        	executor(this.resolve.bind(this),this.reject.bind(this));    
        }catch(err) {
           this.reject(err)
        }
        
    }
	resolve(value) {
        //如果是由于上方的executor函数执行的话，则调用函数的主体即为window，故this为undefined
        if(this.status === HPromise.PENDING) {
         	this.value = value;
        	this.status = HPromise.FULFILLED;   
        }
    }
	reject(reason) {
        if(this.status === HPromise.PENDING) {
            this.value = reason;
            this.status = HPromise.REJECTED;
        }
    }
}
new HPromise((resolve,reject) => {
	resolve(123)
})
```

