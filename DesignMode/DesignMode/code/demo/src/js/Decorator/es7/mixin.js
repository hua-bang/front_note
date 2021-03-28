function mixins(...list) {
    return function(target) {
        // 加载到对象的原型上去
        Object.assign(target.prototype, ...list);
    }
}

let Foo = {
    foo: "foo"
}


@mixins(Foo)
class MyClass{

}
let a = new MyClass();
let b = new MyClass();
console.log(a.foo, b.foo);
a.foo = 123;


console.dir(MyClass);