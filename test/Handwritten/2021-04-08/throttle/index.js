// 时间戳
function throttle(fn, delay=200) {
    let prev = 0;
    return function(...args) {
        const that = this;
        let now = new Date().getTime();
        if(now - prev >= delay) {
            fn.call(that, ...args);
            prev = now;
        }
    }
}

function throttleTimer(fn, delay=200) {
    let timer;
    return function(...args) {
        const that = this;
        if(!timer) {
            fn.call(that, ...args);
            timer = setTimeout(() => {
                timer = null;
            }, delay);
        }
    }
}

let log = () => {
    console.log("log");
}

let throttleLog = throttle(log, 1000);
let throttleTimerLog = throttleTimer(log, 1000);

let input1 = document.querySelector("#input1");
input1.addEventListener("input",log);

let input2 = document.querySelector("#input2");
input2.addEventListener("input", throttleLog)

let input3 = document.querySelector("#input3");
input3.addEventListener("input", throttleTimerLog)