import A, {num} from "./module/a.js";
import obj, {c,num as cNum} from "./module/b.js";
import * as D from "./module/d.js";
console.log(D.bar);//D可读取
// D.bar = 123;    //但不能修改

let a = new A();
console.log(num);
console.log(c, cNum);

console.log(obj);
