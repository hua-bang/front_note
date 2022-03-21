console.log(1);

function func() {
  console.info(2);
}

const a = {
  test(a, b) {
    console.log(32);
    return a + b;
  }
}

export default class Clazz {
  say() {
    console.debug(3);
  }
}