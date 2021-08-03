
// const { effect, reactive } = require("@vue/reactivity");
const { effectWatch, reactive } = require("./core/reactivity/index")

// v1

// let a = 10;
// let b = a + 10;
// a = 20;
// b = a + 10;

// v2

// let a = 10;
// let b;
// update();
// function update() {
//   b = a + 10;
//   console.log(b);
// }
// a = 20;
// update();

// v3
// a 发生更新 b自动更新

// 声明响应式对象
let a = reactive({
  value: 1
});
let b;
effectWatch(() => {
  b = a.value + 10;
  console.log(b);
});

a.value = 30;