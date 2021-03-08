/**
 * @author hug
 * @date 2021/3/8 11:36
 */
function mix(baseClass,...origin) {
    return origin.reduce((prev, curr) => curr(prev),baseClass);
}

class Vehicle {}
let FooMiXin = (superClass) => class extends superClass {};
let BarMiXin = (superClass) => class extends superClass {};
let BazMiXin = (superClass) => class extends superClass {
    baz() {
        console.log("baz")
    }
};
let D  = mix(Vehicle, FooMiXin, BarMiXin, BazMiXin);
let d = new D();
d.baz();
