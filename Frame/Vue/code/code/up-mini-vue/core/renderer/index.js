// vnode -> dom
export function mountElement(vnode, container) {
  const { tag, props, children } = vnode;
  // tag
  const el = document.createElement(tag);

  // props
  if (props) {
    for (const key in props) {
      const val = props[key];
      el.setAttribute(key, val);
    }
  }

  // children
  // 1. 它可以接受字符串类型
  if (["string", "number"].includes(typeof children)) {
    const textNode = document.createTextNode(children);
    el.append(textNode);
  } else if (Array.isArray(children)) {
    children.forEach(v => {
      mountElement(v, el);
    })
  }
  // 2. 接受数组

  // 插入
  container.append(el);
}