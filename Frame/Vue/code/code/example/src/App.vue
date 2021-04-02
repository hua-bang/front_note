<template>
  <div id="app">
    <div>{{msg}}</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msg: "message"
    }
  },
  mounted() {
    console.log(this.msg);
    console.log(this._data.msg);
  }
}
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
