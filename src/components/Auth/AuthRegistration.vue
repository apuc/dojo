<template>
  <main>
    <AuthBody :type="registration"/>
  </main>
</template>

<script>
  import AuthBody from "./AuthBody";
  export default {
    name: "Registration",
    components: {AuthBody}
  }
</script>

<style scoped>
  main {
    display: flex;
    align-items: center;
  }
</style>