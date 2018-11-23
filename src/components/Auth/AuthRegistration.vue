<template>
  <main>
    <header>
      <router-link to="login" class="nav-link"> Авторизация </router-link>
    </header>

    <section>
      <AuthBody :bodyType="'registration'"/>

      <div class="auth-bot">
        <button type="button" class="btn btn__auth-soc">Присоединиться</button>

      </div>
    </section>
  </main>
</template>

<script>
  import AuthBody from "./AuthBody";

  export default {
    name: "Registration",
    components: {AuthButton, AuthBody}
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

  .auth-bot {
    position: relative;
    z-index: 1;
  }
</style>