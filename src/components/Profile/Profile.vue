<template>
  <div class="profile">
    <ProfileSearchBar/>
    <ProfileHeader/>
    <transition name="fade" type="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import ProfileHeader from "./ProfileHeader";
  import ProfileSearchBar from "./ProfileSearchBar";
  export default {
    name: "Profile",
    components: {ProfileSearchBar, ProfileHeader}
  }
</script>

<style scoped>
  .profile {
    position: relative;
    z-index: 1;

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