/**
 * @author hug
 * @date 2021/3/9 20:45
 */
window.color = "red";

// this 谁引用了函数this就指向它
function sayColor() {
    console.log(this.color);    //指向windows
}

sayColor(); //red

let o = {
    color: "blue"
};

//箭头函数的this指向定义函数时的上下文
let sayColor2 = () => {
    console.log(this.color);
}
sayColor2();    //red
o.sayColor = sayColor;
o.sayColor2 = sayColor2;

o.sayColor();   //blue
o.sayColor2();  //red
