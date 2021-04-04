### mixin

如果你还在用 Vue 2，或者只是喜欢用配置对象的方式定义组件功能，可以用 mixin 模式。mixin 把公共逻辑和状态抽取到单独的对象，跟使用 mixin 的组件内部定义对象合并

mixin.vue

```vue
<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount() {
      this.count++;
    },
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

```

App.vue

```vue
<template>
  <div>
    <div>{{ count }}</div>
    <button @click="addCount">+</button>
    <button @click="subCount">-</button>
  </div>
</template>

<script>
import CountMixin from "./mixin/CountMixin.vue";

export default {
  name: "App",
  mixins: [CountMixin],
  components: {},
  data() {
    return {
      msg: "data",
    };
  },
  methods: {
    subCount() {
      this.count--;
    },
  },
  mounted() {
    console.log("app mounted");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

#### 配置合并

使用 mixin 也很简单，只要导入对应模块并在`mixins`数组里加上变量就行。组件初始化时会把 mixin 对象与组件内部定义对象合并。

#### 选项合并

如果组件内的选项跟 mixin 冲突怎么办？调用mixins组件高

#### 优点：

1. 能有效扩展组件
2. 代码复用

#### 缺点：

1. 命名冲突
2. 出现问题定位困难