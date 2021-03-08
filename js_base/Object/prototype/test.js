/**
 * @author hug
 * @date 2021/3/8 9:36
 */
function A() {
    this.name = 123;
    this.arr = [1,2,3,4]
}
let a1 = new A();
let a2 = new A();
a1.arr.push(3);
console.log(a1,a2)

function B() {}
B.prototype.name = 456;
B.prototype.arr = [1,2,3,4];
let b1 = new B();
let b2 = new B();
b1.arr.push(5);
console.log(b1.name,b1.arr);
console.log(b2.name,b2.arr);
