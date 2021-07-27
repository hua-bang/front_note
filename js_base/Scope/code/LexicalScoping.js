var value = 1;

function foo() {
  console.log(value);
}

function b() {
  var value = 2;
  foo();
}

b();