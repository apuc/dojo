<template>
  <main>
    <header>
      <router-link to="login" class="nav-link"> Авторизация </router-link>
    </header>

    <section>
      <form class="reset-pass">
        <input class="reset-pass__input" type="email" placeholder="E-mail для восстановления">
        <button class="btn btn__reset-pass" type="submit"></button>
      </form>
    </section>
  </main>
</template>

<script>
  export default {
    name: "AuthResetPassword"
  }
</script>

<style scoped>
  main {
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .nav-link {
    position: absolute;
    top: 35px;
    left: 100px;
    z-index: 1;

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

  .reset-pass {
    position: relative;
    z-index: 1;
  }

  .reset-pass__input {
    width: 570px;
    padding: 24px 44px;

    font-size: 16px;
    letter-spacing: 0.32px;

    box-shadow: 0 0 45px rgba(0, 0, 0, 0.16);
    border: none;
    border-radius: 35px;
  }

  .reset-pass__input::placeholder {

  }

  .btn__reset-pass {
    position: absolute;
    top: 1px;
    right: 2px;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 65px;

    transform: rotate(45deg);
    background-color: #f30d46;
    border-radius: 50%;
  }

  .btn__reset-pass::before{
    content: '';
    display: block;
    width: 20px;
    height: 20px;

    transform: translate(-18%, 20%);
    border-top: 1px solid white;
    border-right: 1px solid white;
  }
</style>