<template>
  <div class="inside">
    <Nav/>
    <Profile/>
  </div>
</template>

<script>
  import Nav from "./Nav/Nav";
  import Profile from "./Profile/Profile";
  export default {
    name: "Inside",
    components: {Profile, Nav}
  }
</script>

<style scoped>
  .inside {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
</style>