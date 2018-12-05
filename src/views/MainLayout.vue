<template>
  <div class="main">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "MainLayout"
  }
</script>

<style scoped>
  .main {
    flex-grow: 1;
    display: flex;
  }
</style>