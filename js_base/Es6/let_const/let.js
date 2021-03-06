/**
 * @author hug
 * @date 2021/3/6 8:00
 */
// 为什么新增let声明变量关键字
// var不好用? 1.var重复声明 2.var无法限制修改 3.var无块级作用域
// 块级作用域: {} if(){} for(){}
// var在function(){}有函数作用域

var a = 10;
var a = 20;
console.log(a);

var name = "hug";
// 没有块级作用域
if(true) {
    var name = "dgut";
};
console.log(name);

// var 的变量提升
console.log(b);
var b = 30;

// let的TDZ 暂时性死区
console.log(c);
let c = 40;

// 没有块级作用域
{
    var age = 20;
}
console.log(age);

