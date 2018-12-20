<template>
  <div class="main-layout">
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
  .main-layout {
    flex-grow: 1;
    display: flex;

    background-color: #2a2a2a;
  }
</style>