// 创建虚拟节点 vnode

export function h(tag, props, children) {
  return {
    tag,
    props,
    children
  }
}