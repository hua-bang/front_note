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
