<template>
  <div class="profile">
    <ProfileHeader/>
    <ProfileMain/>
  </div>
</template>

<script>
  import Nav from "../Nav/Nav";
  import ProfileHeader from "./ProfileHeader";
  import ProfileMain from "./ProfileMain";

  export default {
    name: "Profile",
    components: {ProfileMain, ProfileHeader, Nav}
  }
</script>

<style scoped>
  .profile {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>