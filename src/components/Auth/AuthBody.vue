<template>
  <div class="auth-body">
    <h2>Dojo</h2>
    <hr>
    <p>{{type === 'login' ? 'Авторизация' : 'Регистрация'}}</p>
    <form class="auth-form" v-if="type === 'login'">
      <AuthInput v-for="(input, index) in login"
                 :key="input.name"
                 :type="input.type"
                 :name="input.name"
                 :placeholder="input.placeholder"
      />
    </form>

    <form class="auth-form" v-else>
      <AuthInput v-for="(input, index) in registration"
                 :key="input.name"
                 :type="input.type"
                 :name="input.name"
                 :placeholder="input.placeholder"
      />
    </form>
  </div>
</template>

<script>
  import AuthInput from "./AuthInput";
  export default {
    name: "AuthBody",
    components: {AuthInput},
    props: {
      type: {
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
        ]
      }
    }
  }
</script>

<style scoped>
  .auth-body {
    width: 430px;
    padding: 30px;
    box-sizing: border-box;

    background-color: #fff;
    box-shadow: 0 0 99px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
  }

  .auth-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
</style>