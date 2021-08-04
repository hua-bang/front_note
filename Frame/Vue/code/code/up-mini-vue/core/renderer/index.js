// vnode -> dom
export function mountElement(vnode, container) {
  const { tag, props, children } = vnode;
  // tag
  const el = vnode.el = document.createElement(tag);

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

  // 插入
  container.append(el);
}

export function diff(n1, n2) {
  // debugger
  let el = n2.el = n1.el;
  // 1. tag
  if (n1.tag !== n2.tag) {
    n1.el.replaceWith(document.createElement(n2.tag));
  } else {
    // 2. props
    // new: {id: "foo", class: "bar"}
    // old: {id: "foo"}

    const { props: newProps } = n2;
    const { props: oldProps } = n1;

    if (newProps && oldProps) {
      Object.keys(newProps).forEach((key) => {
        const newVal = newProps[key];
        const oldVal = oldProps[key];
        if (newVal !== oldVal) {
          el.setAttribute(key, newVal);
        }
      })
    }

    if (oldProps) {
      Object.keys(newProps).forEach((key) => {
        if (!newProps[key]) {
          el.removeAttribute(key);
        }
      })
    }
    
    // 3. children -> (暴力解法)
    //   1. newChildren -> string (oldChildren -> string oldChildren -> array)
    //   2. newChildren -> array (oldChildren -> string oldChildren -> array)
    const { children: newChildren } = n2;
    const { children: oldChildren } = n1;

    if (["string", "number"].includes(typeof newChildren)) {
      if (["string", "number"].includes(typeof oldChildren)) {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else if (Array.isArray(oldChildren)) {
        el.textContent = newChildren;
      }
    } else if (Array.isArray(newChildren)) {
      if (typeof oldChildren === "string") {
        el.innerText = "";
        mountElement(n2, el);
      } else if (Array.isArray(oldChildren)) {
        const length = Math.min(newChildren.length, oldChildren.length);

        // 处理公共的vnode
        for (let index = 0; index < length; index++) {
          const newVnode = newChildren[index];
          const oldVnode = oldChildren[index];
          diff(oldVnode, newVnode);
        }

        if (newChildren.length > length) {
          for (let index = length; index < newChildren.length; index++) {
            const newVode = newChildren[index];
            mountElement(newVode);
          }
        }

        if (oldChildren.length > length) {
          for (let index = length; index < oldChildren.length; index++) {
            const oldVode = oldChildren[index];
            oldVode.el.parent.removeChild(oldVnode.el);
          }
        }
      }
    }
  }
  
}