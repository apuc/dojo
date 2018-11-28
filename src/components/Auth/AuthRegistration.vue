<template>
  <main>
    <header>
      <router-link to="login" class="nav-link"> Авторизация </router-link>
    </header>

    <section>
      <div class="auth-form__social">
        <AuthSocialButton v-for="(icon, index) in authBtns"
                          :key="icon.iconName"
                          :iconSrc="icon.iconSrc"
                          :iconName="icon.iconName"
        />
      </div>

      <AuthBody :bodyType="'registration'"/>

      <div class="auth-bot">
        <button type="button" class="btn btn__auth" @click="openModal">Присоединиться</button>

        <div class="auth-bot__stores stores">
          <a href="#" class="stores__link">
            <img src="../../assets/as.png" alt="apple store" width="173" height="52">
          </a>

          <a href="#" class="stores__link">
            <img src="../../assets/gp.png" alt="google play" width="172" height="52">
          </a>
        </div>
      </div>
    </section>

    <div class="modal" v-if="isModalActive">
      <div class="modal__backdrop" @click="closeModal"></div>

      <div class="modal__container">
        <button type="button" class="btn modal__close" @click="closeModal"></button>

        <div class="modal__content">
          <p class="modal__title">Подтвердите вашу почту</p>
          <p class="modal__desc">Осталось только подтвердить вашу почту, но вы можете сделать это позже.</p>
          <button type="button" class="btn btn__hold" @click="closeModal">Отложить</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import AuthBody from "./AuthBody";
  import AuthSocialButton from "./AuthSocialButton";
  import fb_icon from "../../assets/icons/fb.png"
  import vk_icon from "../../assets/icons/vk.png"
  import gp_icon from "../../assets/icons/gp.png"

  export default {
    name: "Registration",
    components: {AuthSocialButton, AuthBody},
    data() {
      return {
        authBtns: [
          {
            iconSrc: vk_icon,
            iconName: 'vk-login'
          },
          {
            iconSrc: fb_icon,
            iconName: 'fb-login'
          },
          {
            iconSrc: gp_icon,
            iconName: 'gp-login'
          },
        ],
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

    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  section {
    position: relative;
    z-index: 1;
  }

  header {
    position: absolute;
    top: 35px;
    left: 100px;
    z-index: 1;
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

  .auth-form__social {
    position: absolute;
    top: 50%;
    left: -65px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    transform: translateY(-50%);
  }

  .auth-bot {
    position: relative;
    z-index: 1;

    margin-top: 25px;
  }

  .btn__auth {
    width: 100%;
    padding: 14px 0;

    font-size: 22px;
    letter-spacing: 0.44px;

    box-shadow: 0 0 99px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    cursor: pointer;
  }

  .auth-bot__stores {
    position: absolute;
    top: 1px;
    left: calc(100% + 15px);
    z-index: 1;

    display: flex;
    align-items: center;
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