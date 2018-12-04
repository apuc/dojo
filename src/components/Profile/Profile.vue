<template>
  <main>
    <ProfileNav />
  </main>
</template>

<script>
  import ProfileNav from "./ProfileNav";
  export default {
    name: "Profile",
    components: {ProfileNav}
  }
</script>

<style scoped>
  main {
    display: flex;
  }
</style>