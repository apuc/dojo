<template>
  <div class="main">
    <Nav/>
    <slot/>
  </div>
</template>

<script>
  import Nav from "../components/Nav/Nav";
  export default {
    name: "MainLayout",
    components: {Nav}
  }
</script>

<style scoped>
  .main {
    flex-grow: 1;
    display: flex;
  }
</style>