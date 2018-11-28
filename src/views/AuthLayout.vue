<template>
  <div class="auth">
    <slot/>
  </div>
</template>

<script>
  import auth_bg from '../assets/icons/auth_bg.png';
  export default {
    name: "AuthLayout"
  }
</script>

<style scoped>
  .auth {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    background-image: url('../assets/icons/auth_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>