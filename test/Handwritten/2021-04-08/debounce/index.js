let debounce = (fn, delay=500) => {
    let timer;
    return function (...args) {
        let that = this;
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.call(that, ...args);
        }, delay)
    }
}

// 第一次就触发，下面几s内持续触发则无效
let debounceImmediate = (fn, delay=100, immediate=false) => {
    let timer;
    return function(...args) {
        const _this = this;
        // 需要把上一次定时器任务关闭
        if(timer) {
            clearTimeout(timer);
        }
        if(immediate) {
            if(!timer) {
                fn.call(_this, ...args);
            }
            timer = setTimeout(() => {
                timer = null;
            }, delay);
        }else {
            timer = setTimeout(() => {
                fn.call(_this, ...args);
            }, delay)
        }
    }
}

let log = () => {
    console.log("log");
}

let debounceLog = debounce(log);
let debounceImmediateLog = debounceImmediate(log, 500, true);

let input1 = document.querySelector("#input1");
input1.addEventListener("input", log)

let input2 = document.querySelector("#input2");
input2.addEventListener("input", debounceLog)

let input3 = document.querySelector("#input3");
input3.addEventListener("input", debounceImmediateLog);