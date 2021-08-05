import { h } from "../core/render/h.js";
import { mount, patch } from "../core/render/index.js";
import { reactive, watchEffect } from "../core/reactivity/index.js";

export default {
  data: reactive({
    count: 0
  }),
  render() {
    return h("div", {
      onClick: () => { this.data.count++; }
    }, String(this.data.count));
  }
}

