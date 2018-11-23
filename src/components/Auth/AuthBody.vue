<template>
  <div class="auth-body">
    <h2 class="auth-body__title">Dojo</h2>
    <p class="auth-body__title-desc">{{bodyType === 'login' ? 'Авторизация' : 'Регистрация'}}</p>

    <form class="auth-form" v-if="bodyType === 'login'">
      <div class="auth-form__social">
        <AuthSocialButton v-for="(icon, index) in authBtns"
                    :key="icon.iconName"
                    :iconSrc="icon.iconSrc"
                    :iconName="icon.iconName"
        />
      </div>

      <AuthInput v-for="(input, index) in login"
                 :key="input.name"
                 :type="input.type"
                 :name="input.name"
                 :placeholder="input.placeholder"
      />
      <router-link to="/reset_password" class="auth-form__link">Забыли пароль?</router-link>
      <router-link to="/registration" class="auth-form__link">Регистрация</router-link>
    </form>

    <form class="auth-form" v-else>
      <div class="auth-form__social">
        <AuthSocialButton v-for="(icon, index) in authBtns"
                          :key="icon.iconName"
                          :iconSrc="icon.iconSrc"
                          :iconName="icon.iconName"
        />
      </div>

      <AuthInput v-for="(input, index) in registration"
                 :key="input.name"
                 :type="input.type"
                 :name="input.name"
                 :placeholder="input.placeholder"
      />

      <input id="agreement" class="agreement-input" type="checkbox">

      <label for="agreement" class="agreement-label">
        <span class="agreement-label__mark"></span>
        <span>Я согласен на соблюдение каких-то там <span class="bold-text">требований.</span></span></label>
    </form>
  </div>
</template>

<script>
  import AuthInput from "./AuthInput";
  import AuthSocialButton from "./AuthSocialButton";
  import fb_icon from "../../assets/icons/fb.png"
  import vk_icon from "../../assets/icons/vk.png"
  import gp_icon from "../../assets/icons/gp.png"

  export default {
    name: "AuthBody",
    components: {AuthSocialButton, AuthInput},
    props: {
      bodyType: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        login: [
          {
            type: 'email',
            name: 'email',
            placeholder: 'Ваш E-mail',
          },
          {
            type: 'password',
            name: 'password',
            placeholder: 'Ваш пароль',
          },
        ],
        registration: [
          {
            type: 'text',
            name: 'name',
            placeholder: 'Ваше имя',
          },
          {
            type: 'email',
            name: 'email',
            placeholder: 'Ваш E-mail',
          },
          {
            type: 'password',
            name: 'password',
            placeholder: 'Ваш пароль',
          },
          {
            type: 'password',
            name: 'repeat-password',
            placeholder: 'Повторите пароль',
          },
        ],
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
  .auth-body {
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 430px;
    padding: 30px;
    box-sizing: border-box;

    background-color: #fff;
    box-shadow: 0 0 99px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
  }

  .auth-body__title {
    margin: 0;
    padding-bottom: 10px;

    font-size: 36px;
    font-weight: 700;
    letter-spacing: 1.44px;

    border-bottom: 1px solid rgba(112, 112, 112, 0.18);
  }

  .auth-body__title-desc {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.56px;
    text-transform: uppercase;
  }

  .auth-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-top: 50px;
  }

  .auth-form__social {
    position: absolute;
    bottom: 20%;
    left: -65px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    /*transform: translateY(-50%);*/
  }

  .auth-form__link {
    margin-top: 5px;

    font-size: 13px;
    font-weight: 600;
    color: #3d3d3d;
    letter-spacing: 0.26px;
    text-decoration: none;
  }

  .auth-form__link:first-child {
    margin-top: 0;
  }

  .agreement-input {
    display: none;
  }

  .agreement-label {
    position: relative;
    z-index: 1;

    display: flex;
    align-items: center;


    font-size: 13px;
    letter-spacing: 0.26px;
  }

  .agreement-label::before {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    margin-right: 10px;

    background-color: #ffffff;
    border: 1px solid #0078cf;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .agreement-label:hover::before {
    background-color: #244acf;
    transition: background-color 0.2s;
  }

  .agreement-input:checked + .agreement-label::before {
    background-color: #0078cf;
    transition: background-color 0.2s;
  }

  .agreement-label__mark {
    position: absolute;
    top: 1px;
    left: 5px;

    width: 5px;
    height: 10px;

    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    transform: rotate(45deg);
    transition: border 0.2s;
  }

  .agreement-input:checked + .agreement-label > .agreement-label__mark {
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    cursor: pointer;
    transition: border 0.2s;
  }

  .bold-text {
    font-weight: 600;
  }
</style>