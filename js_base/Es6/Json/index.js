/**
 * @author hug
 * @date 2021/3/6 10:00
 */
let name = "hug";
let age = 18;
let obj = {name,age};
console.log(obj);
console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));
