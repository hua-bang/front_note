// 1. 延时如何实现 定时器 setTimeout来控制延时触发
// 2. 如何存放定时器变量又不影响全局 闭包
// 3. 重置延时的时间 清除原定时器 在新增定时器

export function debounce(fn, delay) {
    // 初始化time变量 用于存放定时器变量 不影响全局变量
    let time;
    return function() {
        // 保存当前函数上下文的this
        let _this = this;
        // 如果有定时器，则删除
        if(time) {
            clearTimeout(time);
        }
        // 前方若删除定时器，相当于重置
        // 否则 相当于第一次触发
        time = setTimeout(() => {
            fn.call(_this, ...arguments);
        }, delay);
    }
}

// immediate则表示开头就执行
export function debounceImmediate(fn, delay, immediate = false) {
    let time;
    return function() {
        let _this = this;
        
        if(time) {
            clearTimeout(time);
        }

        if(immediate) {
            // 第一次的话则说明time为空
            let doNow = !time;
            time = setTimeout(() => {
                time = null;   
            }, delay);
            if(doNow) {
                fn.call(_this, ...arguments);
            }
        }else {
            time = setTimeout(() => {
                fn.call(_this, ...arguments);
            }, delay);           
        }
    }
}