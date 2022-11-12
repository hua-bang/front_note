const add = (a, b) => {
  return a + b;
}

const add1 = (a, b) => a + b;

const add2 = (a, b) => {
  console.log(this);
  return a + b;
}