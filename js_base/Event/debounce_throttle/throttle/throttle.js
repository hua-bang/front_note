// 1.第一次使用 必然执行 记录当前时间 并存放到变量previos中
// 2.下一次调用计算当前时间，与上一次的做比较 比较差值在不在范围外。
// 3.范围内不调用，范围外调用
// 4.调用的话，previos得重新记录值
export function throttleTimestamp(fn, wait) {
    let previos = 0;
    return function() {
        let now = new Date().getTime();
        let _this = this;
        if(now - previos >= wait) {
            fn.call(_this, ...arguments);
            previos = now;
        }
    }
}

// 定时器实现
// 1.使用变量canRun来确定是否能执行
// 2.能执行 则执行函数， 并将canRun改为false
export function throttle(fn, delay) {
    let canRun = true;
    return function() {
        let _this = this;
        if(canRun) {
            fn.call(_this, ...arguments);
            canRun = false;
            setTimeout(() => {
                canRun = true;
            }, delay)
        }
    }
}

// 定时器实现
// 用的是定时器变量
export function throttleSetTimeout(fn, delay) {
    let timeout;
    return function() {
        let _this = this;
        if(!timeout) {
            fn.call(_this, ...arguments);
            timeout = setTimeout(() => {
                timeout = null;
            }, delay);
        }
    }
}