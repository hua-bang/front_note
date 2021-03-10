/**
 * @author hug
 * @date 2021/3/10 8:10
 */
window.color = "red";
let o = {
    color: "blue"
}

function sayColor() {
    console.log(this.color);
}

sayColor()  //red
sayColor.call(window);  //red
sayColor.call(o);   //blue
