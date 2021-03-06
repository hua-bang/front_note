/**
 * @author hug
 * @date 2021/3/6 8:40
 */

/**
 *  1.如果没有没有参数或只有多个参数，则必须使用小括号，只有一个参数，可以直接用参数名
 *  2.如果返回语句只有一条，可以不用加大括号，也不用return
 */
const fun = x => x * x;
console.log(fun(3));

console.log([1,5,2,567,2,543].sort((a, b) => {
    return b - a;
}))

// 返回对象 ({...obj})
const obj = (() => ({id:2, name:"hug"}))();
console.log(obj);

let Demo = function () {

};
let a = new Demo();
let Demo2 = () => {};
// let b = new Demo2();    //箭头函数不同于其他一般函数没有构造方法

const obj1 = {
    fun: function () {
        console.log(this);
    }
}

const obj2 = {
    fun: () => {
        console.log(this)
    }
}

obj1.fun();
let fun1 = obj1.fun;
fun1();
obj2.fun();

const obj3 = {
    a: 2,
    test: {
        test: {
            getA: () => {
                console.log(this);
            }
        }
    }
}

console.log(obj3.test.test.getA());

