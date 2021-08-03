<template>
  <div>
    <HelloWorld msg="hello" />
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./views/Login/index.vue";
import HelloWorld from "./views/HelloWorld/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    Login,
    HelloWorld,
  },
  created() {
    console.log(this.$router);
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