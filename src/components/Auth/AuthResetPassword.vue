<template>
  <main>
    <header>
      <router-link to="login" class="nav-link"> Авторизация </router-link>
    </header>

    <section>
      <form class="reset-pass">
        <input class="reset-pass__input"
               type="email"
               placeholder="E-mail для восстановления"
               v-model="email"
        >
        <button class="btn btn__reset-pass" type="submit" @click="openModal"></button>
      </form>
    </section>

    <div class="modal" v-if="isModalActive">
      <div class="modal__backdrop" @click="closeModal"></div>

      <div class="modal__container">
        <button type="button" class="btn modal__close" @click="closeModal"></button>

        <div class="modal__content">
          <p class="modal__title">Посмотрите вашу почту</p>
          <p class="modal__desc">Мы отправили сообщения на вашу почту.</p>
          <button type="button" class="btn btn__hold" @click="closeModal">@mail</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: "AuthResetPassword",
    data() {
      return {
        email: '',
        isModalActive: false
      }
    },
    methods: {
      openModal() {
        this.isModalActive = true;
      },
      closeModal() {
        this.isModalActive = false;
      }
    }
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
    cursor: pointer;
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

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    width: 100vw;
    height: 100vh;
  }

  .modal__backdrop {
    position: absolute;
    z-index: 1;

    width: 100%;
    height: 100%;

    background-color: rgba(0,0,0, 0.44);
  }

  .modal__container {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;

    transform: translate(-50%, -50%);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    background-color: #ced2d3;
  }

  .modal__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 600px;
    height: 232px;
    padding: 20px 90px;
  }

  .modal__title {
    margin: 0;
    padding: 10px 0;

    font-size: 20px;
    letter-spacing: 0.8px;

    border-bottom: 1px solid rgba(0,0,0, 0.1);
  }

  .modal__desc {
    margin-top: 35px;

    font-size: 17px;
    letter-spacing: 0.68px;
  }

  .btn__hold {
    width: 160px;
    padding-top: 5px;
    padding-bottom: 7px;

    color: white;
    border-radius: 15px;
    background-color: #3d3d3d;
    cursor: pointer;
  }

  .modal__close {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 2;

    width: 26px;
    height: 26px;

    background-color: #3d3d3d;
    border-radius: 50%;
    cursor: pointer;
  }

  .modal__close::before,
  .modal__close::after{
    content: '';

    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;

    display: block;
    width: 15px;
    height: 1px;

    background-color: #fff;
  }

  .modal__close::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .modal__close::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
</style>