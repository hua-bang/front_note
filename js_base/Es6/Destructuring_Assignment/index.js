/**
 * @author hug
 * @date 2021/3/6 9:35
 */
let arr = [1,2,3];
let [a,b,c] = arr;
console.log(a,b,c);

// let {name,age} = {name:"hug",age:18};
// console.log(name,age);

let { n: name, a: age } = {n:"hug",a:18};
console.log(name,age);

let [{x,y},[w]] = [{x:"x",y:"y"},[4]];
console.log(x,y,w);

let obj = {
    age: 30,
    name: "obj"
}

console.log([...[1,2,5,9],"x",...[10,11,12]]);

function max(args) {
    return Math.max(...args);
}
console.log(max([1,23,20,21,543,12312,3242332,2123,21,312412]));
