export function mount(vnode, container) {
  mountElement(vnode, container);
}

export function mountElement(vnode, container) {

  const { tag, props, children } = vnode;
  // 1. tag
  let el = vnode.el = document.createElement(tag);

  // 2.props
  if (props) {
    Object.keys(props).forEach(key => {
      if (key.startsWith("on")) {
        el[key.toLowerCase()] = props[key];
      } else {
        el.setAttribute(key, props[key]);
      }
    })
  }

  // 3. children
  if (children !== null) {
    if (["string", "number"].includes(typeof children)) {
      el.textContent = children;
    } else if (Array.isArray(children)) {
      children.forEach(child => {
        if (child.tag) {
          mountElement(child, el);
        }
        else {
          el.textContent = child;
        }
      })
    }
  }

  container.appendChild(el);
}

export function patch(n1, n2) {
  let el = n2.el = n1.el;
  if (n1.tag === n2.tag) {

    // props
    const { props: oldProps = {} } = n1
    const { props: newProps = {} } = n2;
    for (const key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];
      if (newValue !== oldValue) {
        if (key.startsWith("on")) {
          el[key.toLowerCase()] = newValue;
        } else {
          el.setAttribute(key, newValue);
        }
      }
    }
    for (const key in oldProps) {
      if (!newProps[key]) {
        el.removeAttribute(key);
      }
    }

    // children
    let { children: oldChildren = [] } = n1;
    let { children: newChildren = [] } = n2;

    if (["string", "number"].includes(typeof newChildren)) {
      if (["string", "number"].includes(typeof oldChildren)) {
        el.textContent = newChildren;
      } else if (Array.isArray(oldChildren)) {
        el.textContent = newChildren;
      }
    } else if (Array.isArray(newChildren)) {
      if (Array.isArray(oldChildren)) {
        let newLength = newChildren.length, oldLength = oldChildren.length;
        let length = Math.min(newLength, oldLength);

        for (let index = 0; index < length; index++) {
          patch(oldChildren[index], newChildren[index]);
        }

        for (let index = length; index < newLength; index++) {
          mount(newChildren[index], el);
        }

        for (let index = length; index < oldLength; index++) {
          el.removeChild(oldChildren[index].el);
        }

      } else if (["string", "number"].includes(typeof oldChildren)) {
        el.innerHTML = "";
        newChildren.forEach(child => {
          mount(child, el);
        })
      }
    }
  } else {
    //replace
    let parentNode = el.parentNode;
    parentNode.removeChild(el);
    mount(n2, parentNode);
  }
}