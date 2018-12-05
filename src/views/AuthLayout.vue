<template>
  <div class="auth">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "AuthLayout"
  }
</script>

<style scoped>
  .auth {
    flex-grow: 1;
    display: flex;
    justify-content: center;

    color: #3d3d3d;

    background-image: url('../assets/auth_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>