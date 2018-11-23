<template>
  <button type="button" class="btn btn__auth-soc">
    <img :src="iconSrc" :alt="iconName" width="35" height="35">
  </button>
</template>

<script>
  export default {
    name: "AuthSocialButton",
    props: {
      iconSrc: {
        type: String,
        required: true
      },
      iconName: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .btn__auth-soc {
    margin-bottom: 20px;
    padding: 17px 16px;

    font-size: 0;

    border-bottom-left-radius: 100px;
    border-top-left-radius: 100px;
  }

  .btn__auth-soc:last-child {
    margin-bottom: 0;
  }
</style>