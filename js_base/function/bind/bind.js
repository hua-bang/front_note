/**
 * @author hug
 * @date 2021/3/10 8:13
 */
window.color = "red";
let o = {
    color: "blue"
};
function sayColor () {
    console.log(this.color);
}
let say = sayColor.bind(o);
say();
