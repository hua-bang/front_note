let Foo = (function() {
    return {
        bar: "bar",
        baz: () => {
            return "baz";
        }
    }
})();

console.log(Foo.bar);
console.log(Foo.baz());

let Foo2 = (function() {
    let bar = "bar";
    let baz = () => {
        return "baz";
    }
    return {
        bar,
        baz: baz
    }
})()

console.log(Foo2.bar);
console.log(Foo2.baz());

let globalBar = "globalBar"
let Foo3 = ((bar) => {
    return {
        bar,
        baz() {
            return "baz";
        }
    }
})(globalBar);
console.log(Foo3.bar);

let Foo4 = ((FooMoudle, fName, fn = () => {}) => {
    FooMoudle[fName] = fn;
    return FooMoudle;
})(Foo, "test", () => {
    console.log("i am just test");
})

console.log(Foo4.baz());
Foo4.test();

Foo4 = ((FooMoudle, fName, fn = () => {}) => {
    FooMoudle[fName] = fn;
    return FooMoudle;
})(Foo, "demo", () => {
    console.log("i am demo");
})
Foo4.demo();
