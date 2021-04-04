# Vue.js的computed和watch是如何工作的

#### computed和watch定义

1. computed

   计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时它们才会重新求值。值得注意的是“reversedMessage”不能在组件的props和data中定义，否则会报错。

2. watch

   watch是一个侦听的动作，用来观察和响应 Vue 实例上的数据变动

   在这个示例中，使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

#### computed和watch用法异同

相同： computed和watch都起到监听/依赖一个数据，并进行处理的作用

异同：

- computed主要用于对同步数据的处理
- watch主要用于观测某个值变化后也同时后面你可以去完成一段比较复杂的业务逻辑。

#### watch的高级用法

1. handler方法和immediate属性(immediate为true则第一次绑定过的时候就执行)

   ```js
   watch: {
       firstName: {
           handler(val) {
               this.fullName = ""
           },
           immediate: true
       }
   }
   ```

2. deep属性

   由于数据劫持是由Object.defineProperty实现的，然后他恕不能检测数组改变，检测对象的改变，deep的意思是深度遍历，一层一层往下遍历，但这个对于性能的开销特别大

#### computed的本质 —— computed watch

#### watch底层是如何工作的？