import { mount, patch } from "../core/render/index.js";
import { reactive, watchEffect } from "../core/reactivity/index.js";


export function createApp(component) {
  return {
    mount(container) {
      let isMouted = false;
      let prevNode;
      watchEffect(() => {
        if (!isMouted) {
          prevNode = component.render();
          mount(prevNode, container);
          isMouted = true;
        } else {
          let currNode = component.render();
          patch(prevNode, currNode);
          prevNode = currNode;
        }
      })
    }
  }
}
