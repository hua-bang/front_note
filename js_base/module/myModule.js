let myModules = (function Manager() {
    let modules = {};

    function define(name, deps, impl) {
        let dependArr = deps.map(v => modules[v]);
        modules[name] = impl.apply(impl, dependArr);
    }

    function get(name) {
        return modules[name];
    }

    return {
        define,
        get
    }
})();

myModules.define("math", [], () => {
    function add(x, y) {
        return x + y;
    }

    function test() {
        return "i am math";
    }
    return {
        add,
        test
    }
})

myModules.define("foo", ["math"], (math) => {
    function testAdd(a, b) {
        return "foo: 1 + 8 = " + math.add(a, b);
    }
    return {
        testAdd
    }
})

let math = myModules.get("math");
console.log(math.add(1, 5));

let foo = myModules.get("foo");
console.log(foo.testAdd(2, 9));