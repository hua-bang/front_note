# Vue 3 Deep Dive with Evan You

![image-20210804204915927](image-20210804204915927.png)

来和尤大大一起深入学习VUE3吧。

## 前言

#### 说明：

这个视频的一些前置条件

- 对JavaScript有一定的基础，比较能够理解API的用法以及用意。
- 对Vue3的有一定认识，并明白Vue3的核心原理。
- 充满热爱的心💪

## 一、整体流程

![Kapture 2020-12-10 at 16.13.53.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ccf57d312f343e694b740bf8af27cf1~tplv-k3u1fbpfcp-zoom-1.image)

1. 首先，模板编译器将HTML模板转化成render function
2. 数据响应模块将数据对象初始化响应式数据对象
3. 渲染模块中
   1. RenderPhase：渲染模块根据渲染函数初始化生成虚拟DOM。
   2. MountPhase: 利用虚拟DOM创建页面视图
   3. PatchPhase：数据模型一旦变化，渲染函数会再次被调用生成新的虚拟DOM，通过diff算法更新视图。

## 二、三大模块

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1bf5aeeff25d494fa30f6cc4da3418d3~tplv-k3u1fbpfcp-zoom-1.image)

- 数据响应式模块
- 编译器模块
- 渲染模块

1. #### 数据响应式模块

   提供创建数据响应式的方法。

   ![Kapture 2020-12-10 at 11.47.59.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb684f9b06034d95b3b96a66d251e6ea~tplv-k3u1fbpfcp-zoom-1.image)

2. #### 编译模块

   将模板编译成render函数

   这个编译过程可以在以下两个时刻执行

   - 浏览器运行时 (runtime)
   - Vue项目打包编译时 (compile time)

   ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec19720e864e4597bd8383d807682f68~tplv-k3u1fbpfcp-zoom-1.image)

3. #### 渲染函数

   渲染函数通过以下三个周期将视图渲染到页面上![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/129788b2a7764f1a8429cdcee739e583~tplv-k3u1fbpfcp-zoom-1.image)

   - Render Phase
   - Mount Phase
   - Patch Phase

## 三、虚拟DOM

### 1.什么是DOM

DOM(Document Object Model)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5204ab8763d439aaf92a93409adcaa7~tplv-k3u1fbpfcp-zoom-1.image)

HTML在浏览器中会映射为一些列节点，方便我们去调用。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a1abb6e9a894b79b0c68fea3418dabd~tplv-k3u1fbpfcp-zoom-1.image)

### 2.什么是虚拟DOM

我们都知道，原生DOM元素功能属性非常多，导致我们查询或者更新DOM的时候消耗很大的性能，使得性能比较低。

而虚拟DOM就是用JavaScript来对真实DOM进行一个抽象和描述。

实质：用JS表示实际DOM的对象。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2bebc541f75349d5b50748c98ac91770~tplv-k3u1fbpfcp-zoom-1.image)

### 3.什么是渲染函数

在Vue渲染视图模块中，我们知道，无论是我们写的render函数或者是template，最终都会转化成render function, 再通过render function转化成Vdom

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc36917c29f34519a4e7360252a9c643~tplv-k3u1fbpfcp-zoom-1.image)

一般写法如下

```js
render(h) {
    return h(tag, props, children);
}
```

那这里的h函数是的作用是：**形成虚拟DOM**

这里对虚拟DOM的生成做简化

```js
function h(tag, props, children) {
    return {
        tag,
        props,
        children
    }
}
```

我们注意上方函数，实际上渲染的就是一个vnode。

### 4.如何挂载

此处做一个简略的写法，实现mount

我们知道，实际上我们mount的时候我们应该去创建真实的DOM节点，并进行挂载

```js
function mount(vnode, container) {
  	mountElement(vnode, container);
}

function mountElement(vnode, container) {
    const { tag, props, children } = vnode;
    // 1. tag
    let el = vnode.el = document.createElement(tag);

    // 2.props
    if (props) {
        Object.keys(props).forEach(key => {
        el.setAttribute(key, props[key]);
        })
    }

    // 3. children
    if (children) {
        if (["string", "number"].includes(typeof children)) {
            el.textContent = children;
        } else if (Array.isArray(children)) {
            children.forEach(child => {
                if (child.tag) {
                    mountElement(child, el);
                }else {
                    el.textContent = child;
                }
            })
        }
    }
    container.appendChild(el);
}
```

### 5. 通过DomDiff高效更新视图

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d4f3cd633a747babce2fe13d85de791~tplv-k3u1fbpfcp-zoom-1.image)

### 6.总结

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7280be36614c4bdeb0cc0a13235a33b5~tplv-k3u1fbpfcp-zoom-1.image)