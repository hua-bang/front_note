@testDemo
@testDemo2("test","hug")
class Demo {

}

function testDemo(target) {
    target.show = () => {
        console.log("show");
    }
}

function testDemo2(key, value) {
    return function(target) {
        target[key] = value;
    }
}



Demo.show();
console.log(Demo.test)

export {Demo};