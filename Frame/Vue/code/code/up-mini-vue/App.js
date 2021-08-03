
// const { effect, reactive } = require("@vue/reactivity");
import { effectWatch, reactive } from "./core/reactivity/index.js";
import { h } from "./core/h.js";

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

export default {
  // template -> render
  render(context) {
      // view -> 每次都重新创建
      // 计算最小的更新点  -> vdom js对象
      // diff

      // reset
    // const div = document.createElement("div");
    // div.innerText = context.state.count;
    // return div;
    return h(
      "div",
      {
        id: "app-id",
        class: "show"
      },
      [
        h(
          "p",
          {
            style: "color: red"
          },
          "hello, world"
        ),
        h("p", null, context.state.count)
      ]
    );
  },
  setup() {
    const state = reactive({
      count: 0
    });
    window.state = state;
    return {
      state
    }
  }
}
