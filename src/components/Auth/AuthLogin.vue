<template>
  <main>
    <header>
      <router-link to="registration" class="nav-link"> Регистрация </router-link>
    </header>

    <section>
      <div class="auth-form__social">
        <AuthSocialButton v-for="(icon, index) in authBtns"
                          :key="icon.iconName"
                          :iconSrc="icon.iconSrc"
                          :iconName="icon.iconName"
        />
      </div>

      <AuthBody :bodyType="'login'"/>

      <div class="auth-bot">
        <button type="button" class="btn btn__auth">Войти</button>

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
  </main>
</template>

<script>
  import AuthBody from "./AuthBody";
  import AuthSocialButton from "./AuthSocialButton";
  import fb_icon from "../../assets/icons/fb.png"
  import vk_icon from "../../assets/icons/vk.png"
  import gp_icon from "../../assets/icons/gp.png"

  export default {
    name: "AuthLogin",
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
        ]
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

  section {
    position: relative;
    z-index: 1;
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
</style>