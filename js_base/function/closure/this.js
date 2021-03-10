/**
 * @author hug
 * @date 2021/3/10 9:29
 */
window.color = "red";
let object = {
    color: "blue",
    getColor() {
        return function () {
            return this.color;
        }
    },
    getColor1() {
        let that = this;
        return function () {
            return that.color;
        }
    },
    getColor2() {
        return this.color;
    }
}

console.log(object.getColor()());
console.log(object.getColor1()());
console.log(object.getColor2());
console.log((object.getColor2)());  //this值没有改变
console.log((object.getColor2 = object.getColor2)());   //赋值 this值改变 因为变大时返回的是函数本身 this不和任何对象绑定
