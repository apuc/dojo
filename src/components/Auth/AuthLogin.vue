<template>
  <main>
    <header>
      <router-link to="registration" class="nav-link"> Регистрация </router-link>
    </header>

    <section>
      <AuthBody :bodyType="'login'"/>


    </section>
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
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .nav-link {
    display: inline-flex;
    align-items: center;

    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.36px;
    color: white;
    text-decoration: none;
  }

  .nav-link::before {
    content: '';
    position: relative;
    top: 1px;

    display: block;
    width: 9px;
    height: 9px;
    margin-right: 15px;

    border: 1px solid white;
    border-top: none;
    border-right: none;
    transform: rotate(45deg);
  }

  header {
    align-self: flex-start;
    margin-left: 100px;
    margin-bottom: auto;
  }

  section {
    margin-bottom: auto;
  }
</style>