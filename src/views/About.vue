<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      // key: value
    };
  },

  mounted() {
    console.log(this.getWindow());
  },

  methods: {
    getWindow() {
      return window.google;
    }
  }
};
</script>

<style scoped></style>
