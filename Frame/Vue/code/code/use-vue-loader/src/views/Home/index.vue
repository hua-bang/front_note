<template>
  <div class="home">
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "home",
    };
  },
};
</script>

<style scoped>
.home {
  color: red;
}
</style>