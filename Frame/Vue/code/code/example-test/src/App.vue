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
    addCount() {
      this.count += 2;
    },
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
