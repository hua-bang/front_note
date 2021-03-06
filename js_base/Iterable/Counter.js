/**
 * @author hug
 * @date 2021/3/6 11:49
 */
// target 传入一个limit进行参数初始化 迭代器从1开始到limit值结束 每次循环得到的值加一
// 使用迭代器实现计数器
class Counter {
    constructor(limit) {
        this.limit = limit;
    }

    [Symbol.iterator]() {
        let count = 1;
        return {
            next:() => {
                if(count<=this.limit) {
                    return {done:false,value:count++}
                }else{
                    return {done: true,value:undefined}
                }
            }
        }
    }
}

let count = new Counter(6);
for (const val of count) {
    console.log(val);
}
for (const val of count) {
    console.log(val);
}
