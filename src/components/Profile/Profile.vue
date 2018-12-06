<template>
  <div class="profile">
    <ProfileHeader/>
    <transition name="fade" type="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import ProfileHeader from "./ProfileHeader";
  export default {
    name: "Profile",
    components: {ProfileHeader}
  }
</script>

<style scoped>
  .profile {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
</style>