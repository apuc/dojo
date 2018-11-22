<template>
  <main>
    <nav>

    </nav>

    <AuthBody :type="login"/>
  </main>
</template>

<script>
  import AuthBody from "./AuthBody";
  export default {
    name: "AuthLogin",
    components: {AuthBody}
  }
</script>

<style scoped>

</style>