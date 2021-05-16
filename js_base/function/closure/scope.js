function foo() {
    console.log(a);
}

function b() {
    var a = 3;
    foo();
}

var a = 2;

foo();