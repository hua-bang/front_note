#### 数据驱动

- vue中一个核心思想是数据驱动。所谓数据驱动，指视图由数据驱动而生成的，对于视图的修改，不会直接操作DOM，而是通过修改数据。简化代码量，所有的逻辑都是对数据的修改，而不用碰到DOM，利于维护。

- vue中实例：

  - vue中

    ```vue
    <div id="app">
        {{message}}
    </div>
    ```

  - 脚本中

    ```js
    var app = new Vue({
        el: "#app",
        data: {
            message: "hello,vue"
        }
    })
    ```

    数据驱动：数据更新驱动视图变化。

#### new Vue发生了什么

从入口分析,我们知道Vue是个构造函数,其源码如下图

core/instance/index.js

```js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
```

可以看到 `Vue` 只能通过 new 关键字初始化，然后会调用 `this._init` 方法， 该方法在 `src/core/instance/init.js` 中定义。

```js
Vue.prototype._init = function (options?: Object) {
  const vm: Component = this
  // a uid
  vm._uid = uid++

  let startTag, endTag
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    startTag = `vue-perf-start:${vm._uid}`
    endTag = `vue-perf-end:${vm._uid}`
    mark(startTag)
  }

  // a flag to avoid this being observed
  vm._isVue = true
  // merge options
  if (options && options._isComponent) {
    // optimize internal component instantiation
    // since dynamic options merging is pretty slow, and none of the
    // internal component options needs special treatment.
    initInternalComponent(vm, options)
  } else {
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor),
      options || {},
      vm
    )
  }
  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    initProxy(vm)
  } else {
    vm._renderProxy = vm
  }
  // expose real self
  vm._self = vm
  initLifecycle(vm)
  initEvents(vm)
  initRender(vm)
  callHook(vm, 'beforeCreate')
  initInjections(vm) // resolve injections before data/props
  initState(vm)
  initProvide(vm) // resolve provide after data/props
  callHook(vm, 'created')

  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    vm._name = formatComponentName(vm, false)
    mark(endTag)
    measure(`vue ${vm._name} init`, startTag, endTag)
  }

  if (vm.$options.el) {
    vm.$mount(vm.$options.el)
  }
}
```

Vue初始化就干了几件事,和平配置,初始化生命周期,初始化事件中心,初始化渲染,初始化data,props,computed,wacther等.

初始化data的时候,过程如下

1. 先判断传过来的data是函数还是对象
2. 函数则取返回值,对象直接加入
3. 同时赋值给vm._data
4. data和method和props进行对比
5. 此时vm._data有数据,后使用代理,将\_data中的属性直接绑定在vm上,所以实际上我们在vue中调用的this.message相当于调用了this.\_data.message

#### Vue实例挂载的实现

Vue中我们是通过$mount方法去挂载实例vm的,$mount在多个文件中都有定义(因而他和平台 构建模式相关)

流程:

- 首先,对el进行了限制,不能挂载在html,body上
- 接下来 找render
- 如果没有render函数,则把el或template字符转成render方法
- Vue2中,所有组件的渲染都是需要render方法的
- 无论我们是使用单文件.vue还是el,还是template属性,都会称为render

注意:

1. 为什么要多次调用$mount函数?

   由于平台和构建函数的方式不一样,所以$mount具体实现的逻辑代码也不一样,这样子是为了实现复用.

2. Vue2中,所有组件的渲染都需要render方法

$mount函数支持传入2个参数

- el
  - 可以是dom对象
  - 字符串
  - 挂载的元素
- hydrating,服务器渲染相关

$mount函数实际调用mountComponent

流程:

- mountComponent核心就是先实例化一个watcher,
- 回调函数中会调用,updateCompoent方法,
- 调用vm.\_render得到vNode,
- 最终调用vm.\_update更新Dom

Watcher作用

- 初始化执行回调函数
- 当vm实例中检测的数据发生改变时执行回调函数

#### 函数最后判断为根节点的时候

设置 `vm._isMounted` 为 `true`， 表示这个实例已经挂载了，同时执行 `mounted` 钩子函数。 

这里注意 `vm.$vnode` 表示 Vue 实例的父虚拟 Node，所以它为 `Null` 则表示当前是根 Vue 的实例。



### Render函数

- 将实例渲染成虚拟dom
- 平时用的少 手写render,一般都是用template函数
- render
  - createElement就是vm.$createElement
- initRender
  - vm.c: 被模板编译成的render函数使用 
  - vm.$createElement:用户手写的render函数使用
  - 都调用了createElement方法
- vm.\_render最终总是通过执行createElement放回VNode
- 2.0比1.0最大的升级就是利用了Virtual DOM

#### Virtual DOM

- 产生原因:游览器中的DOM比较昂贵,所以不要频繁操作DOM
- Virtual DOM用js对象去描述DOM,所以它比创建一个DOM代价小很多,VirtualDOm是由Vnode这个Class描述的
- 鉴于snabbdom实现
- 总结:VNode是对真实DOM的一种抽象描述,它的核心定义无非就几个关键属性，标签名、数据、子节点、键值等,其余属性是来扩展VNode灵活性实现feature的,由于VNOde来映射真是dom渲染,不需要包含dom操作,轻便.
- VNode映射到真实的DOM需要经历create diff patch过程
- VNodecreate是通过createElment方法创建的

#### CreateElement

- createElement实际上对\_createElement方法进行封装，传入参数更灵活，处理参数后，调用真正创建VNode函数的_\_createElement
- 流程:
  - children规范
    - 数组打平 生成VNode的Array
    - VNode创建
      - tag类型判断
        - string
          - 内置节点：生成普通的VNode
          - 注册的组件类型：创建组件类型节点,否则就创建一个未知的标签VNode
        - component
          - createCompoent创建一个组件类型的VNode节点
- 总结：大致了解了createElement创建VNode的过程，每个VNode由children，chilren每个元素都是VNode，形成VNode tree

#### update

- Vue的\_update是实例的一个私有方法

- 调用的时机：
  - 一是首次渲染
  - 一是数据更新的时候

- 首次渲染分析

  - 将VNode渲染成真实的DOM  

- 核心

  - 在于vm.\_\_patch\_\-的方法，实际上不同的平台，定义是不一样的

    ```js
    Vue.prototype.__patch__ = isBrowser ? patch : noop;
    ```

    可以看出游览器端 指向patch 服务器端为空

  - path方法定义是调用createPatchFunction方法的放回值

    - 参数

      ```js
      {nodeOps, modules}
      ```

      nodeOps封装一系列dom操作

      modules定义一些模块的钩子函数的实现

  - 思考：为什么代码散在每个目录？

    - 因为每个平台都有各自的nodeOps和modules，分散更为清晰，也可以复用

  - 思考：由公共的代码部分放在core中？

    - 不同平台很具参数来区别实现差异化，这里使用函数柯里化的技巧，把差异化参数提前固化，这样不用剋此调用patch都传递nodeOps和modules了。

  - ![img](https://ustbhuangyi.github.io/vue-analysis/assets/new-vue.png)

    - new Vue->init->$mount->complie->render->vnode->patch->Dom