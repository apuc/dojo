<template>
  <div class="profile">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "ProfileLayout"
  }
</script>

<style scoped>
  .profile {
    flex-grow: 1;
    display: flex;
  }
</style>