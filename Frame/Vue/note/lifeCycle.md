### 生命周期

每个Vue实例在创建之前都要经过一系列初始化过程。设置数据监听、编译模板、挂载实例到DOM，数据变化是更新DOM。

这些过程中也会运行一些生命周期钩子的函数。

![img](https://ustbhuangyi.github.io/vue-analysis/assets/lifecycle.png)

所有执行生命周期的函数调用的callHook方法（发布、订阅）

#### beforeCreate & created

- beforeCreate和created都是实例化Vue的阶段，在_init方法执行
- beforeCreate在initState前后，initState作用是初始化props,data,methods,watch,computed属性
- 故beforeCreate不能获取到props,data的值，也不能调用method，created可以
- 此时的还没有进行挂载，所以也不能访问DOM

#### beforeMount & mouted

- `beforeMount` 钩子函数发生在 `mount`，也就是 DOM 挂载之前，它的调用时机是在 `mountComponent` 函数中
- 使用vm._render()之前执行了beforeMount即喧嚷VNode之前
- 在执行完 `vm._update()` 把 VNode patch 到真实 DOM 后，执行 `mounted` 钩子 但这里的是初始化vue的过程，而非组件初始化过程
- 每个子组件都是在componentVNodeHooks中触发mounted钩子函数

#### beforeUpdate & updated

- 顾名思义，beforeUpdate和updated的钩子函数执行时机都是在数据更新的时候。
- `beforeUpdate` 的执行时机是在渲染 Watcher 的 `before` 函数中，我们刚才提到过
- 只有满足当前 `watcher` 为 `vm._watcher` 以及组件已经 `mounted` 这两个条件，才会执行 `updated` 钩子函数。

#### beforeDestroy & destroyed

顾名思义，`beforeDestroy` 和 `destroyed` 钩子函数的执行时机在组件销毁的阶段，组件的销毁过程之后会详细介绍，最终会调用 `$destroy` 方法

`beforeDestroy` 钩子函数的执行时机是在 `$destroy` 函数执行最开始的地方，接着执行了一系列的销毁动作，包括从 `parent` 的 `$children` 中删掉自身，删除 `watcher`，当前渲染的 VNode 执行销毁钩子函数等，执行完毕后再调用 `destroy` 钩子函数。

#### activated & deactivated

`activated` 和 `deactivated` 钩子函数是专门为 `keep-alive` 组件定制的钩子，我们会在介绍 `keep-alive` 组件的时候详细介绍，这里先留个悬念。

### 总结：

主要介绍了Vue生命周期的各种钩子函数的执行时机。

- created可以访问到数据data,props,method
- mounted可以访问到DOM
- destory可以做一些定时器的销毁工作。