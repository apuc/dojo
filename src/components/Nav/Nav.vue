<template>
  <aside class="nav">
    <div class="nav__body">
      <header class="nav__header">
        <router-link to="/">
          <img src="../../assets/icons/logo.png" width="28" height="28" alt="">
        </router-link>

        <div class="settings">
          <router-link type="button"
                       class="btn_nulled mr20"
                       to="/settings"
          >
            <img src="../../assets/icons/settings.svg" width="21" height="21" alt="">
          </router-link>

          <div class="profile-m__wrapper mr20">
            <button type="button"
                    class="btn_nulled"
                    @mouseenter="openProfile"
                    :class="isProfileOpened ? 'blue-icon' : ''"
            >
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               version="1.1"
               id="Capa_1"
               x="0px"
               y="0px"
               viewBox="0 0 33 33"
               style="enable-background:new 0 0 33 33;"
               xml:space="preserve"
               width="21"
               height="21">
            <g>
              <path d="M16.5,33C7.402,33,0,25.598,0,16.5S7.402,0,16.5,0S33,7.402,33,16.5S25.598,33,16.5,33z M16.5,1C7.953,1,1,7.953,1,16.5   S7.953,32,16.5,32S32,25.047,32,16.5S25.047,1,16.5,1z" fill="#C7C7C7"/>
              <path d="M16.5,33c-3.435,0-6.736-1.058-9.549-3.06c-0.15-0.107-0.23-0.29-0.206-0.473s0.148-0.339,0.322-0.403   c4.146-1.535,4.815-2.781,4.815-5.169c0-0.631-0.142-0.838-0.398-1.214c-0.339-0.494-0.803-1.171-1.129-2.939   c-0.048-0.254-0.089-0.274-0.316-0.384c-0.606-0.292-1.163-0.712-1.309-2.628c0-0.928,0.32-1.441,0.585-1.708   c-0.058-0.33-0.153-0.899-0.242-1.519C8.62,10.726,8.6,7.325,12.506,5.744c3.404-1.38,6.121-0.626,6.974,0.273   c0.604,0.019,2.162,0.177,3.246,1.438c1.668,1.94,1.137,6.363,0.955,7.562c0.266,0.261,0.589,0.767,0.589,1.675   c-0.146,1.954-0.703,2.375-1.31,2.666c-0.228,0.11-0.269,0.129-0.316,0.384c-0.326,1.768-0.789,2.445-1.128,2.939   c-0.257,0.375-0.398,0.583-0.398,1.214c0,2.388,0.669,3.634,4.815,5.169c0.174,0.064,0.298,0.219,0.322,0.403   s-0.056,0.366-0.206,0.473C23.236,31.942,19.935,33,16.5,33z M8.317,29.651C10.779,31.191,13.589,32,16.5,32   s5.721-0.809,8.183-2.349c-3.474-1.426-4.565-2.864-4.565-5.755c0-0.941,0.278-1.348,0.573-1.779   c0.304-0.444,0.682-0.996,0.971-2.556c0.139-0.754,0.576-0.964,0.865-1.103c0.311-0.149,0.631-0.303,0.744-1.803   c-0.001-0.764-0.344-0.972-0.358-0.98c-0.184-0.106-0.303-0.329-0.264-0.537c0.248-1.329,0.656-5.474-0.681-7.031   c-0.913-1.062-2.352-1.091-2.626-1.08c-0.046-0.004-0.091-0.005-0.134-0.016c-0.13-0.033-0.35-0.146-0.417-0.262   c-0.272-0.466-2.641-1.403-5.91-0.08c-3.231,1.308-3.238,4.112-2.819,6.682c0.138,0.957,0.289,1.784,0.29,1.788   c0.041,0.225-0.076,0.449-0.283,0.544l0,0c0.003,0-0.339,0.209-0.339,1.008c0.112,1.461,0.433,1.616,0.743,1.765   c0.289,0.139,0.727,0.349,0.866,1.103c0.288,1.56,0.666,2.112,0.97,2.556c0.296,0.431,0.574,0.838,0.574,1.779   C12.883,26.788,11.792,28.226,8.317,29.651z" fill="#C7C7C7"/>
            </g>
          </svg>
            </button>

            <div class="profile-m" v-if="isProfileOpened">
              <router-link class="profile-m__link" to="/profile">Мой профиль</router-link>
              <router-link class="profile-m__link" to="/edit-profile">Редактировать</router-link>
              <hr class="border-menu">
              <router-link class="profile-m__link" to="/my-courses">Мои курсы</router-link>
              <hr class="border-menu">
              <button type="button" class="btn btn_transparent profile-m__link">Выйти</button>
            </div>
          </div>
        </div>
      </header>

      <NavGroup :data="menu"/>
      <!--<NavGroup :data="communication"/>-->
      <!--<NavGroup :data="startups"/>-->
    </div>
  </aside>
</template>

<script>
  import NavGroup from "./NavGroup";
  import edit from '../../assets/icons/edit.svg';
  import play_button from '../../assets/icons/play-button.svg';
  import Vue from 'vue';

  export default {
    name: "Nav",
    components: {NavGroup},
    data() {
      return {
        menu: {
          info: [
            {
              link: '/',
              name: 'Главная'
            },
            {
              link: '/courses',
              name: 'Курсы'
            }
          ],
            notifications: {
              link: '/notifications',
              name: 'Уведомления',
              counter: 5
            },
        },
        // study: {
        //   title: 'Обучение',
        //   info: [
        //     {
        //       link: '/feed',
        //       name: 'Лента'
        //     },
        //     {
        //       link: '/courses',
        //       name: 'Курсы'
        //     },
        //   ],
        //   fieldsWithIcons: [
        //     {
        //       link: '/create-course',
        //       name: 'Создать курс',
        //       imgSrc: edit
        //     },
        //     {
        //       link: '/join-course',
        //       name: 'Поступить на курс',
        //       imgSrc: play_button
        //     },
        //   ],
        //   notifications: {
        //     link: '/notifications',
        //     name: 'Уведомления',
        //     counter: 5
        //   },
        // },
        // communication: {
        //   title: 'Общение',
        //   info: [
        //     {
        //       link: '/groups',
        //       name: 'Группы'
        //     },
        //     {
        //       link: '/messages',
        //       name: 'Сообщения'
        //     }
        //   ],
        // },
        // startups: {
        //   title: 'Стартапы',
        //   info: [
        //     {
        //       link: '/find-team',
        //       name: 'Найти команду'
        //     },
        //     {
        //       link: '/create-team',
        //       name: 'Создать стартап'
        //     }
        //   ],
        // },
        isProfileOpened: false,
      }
    },
    methods: {
      openProfile(e) {
        this.isProfileOpened = !this.isProfileOpened;
      }
    },
  }
</script>

<style scoped>
  .nav {
    position: relative;
    z-index: 2;
    width: 250px;
    height: 100%;
    padding: 25px;
    box-sizing: border-box;

    font-family: 'Roboto', 'Segoe UI', sans-serif;

    background-color: #212121;
  }

  .nav__body {
    position: sticky;
    top: 25px;
    z-index: 1;
  }

  .nav__header {
    display: flex;
    align-items: center;
  }

  .settings {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .border-nav,
  .border-menu {
    width: 100%;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.1);
  }

  .border-menu {
    margin-top: 0;
    margin-bottom: 20px;
  }

  .profile-m {
    position: absolute;
    top: 70px;
    left: calc(100% + 40px);
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px;

    background-color: #212121;
    border-radius: 10px;
  }

  .profile-m__link {
    width: 100%;
    margin-bottom: 20px;
    padding-top: 0;
    padding-bottom: 0;

    font-size: 16px;
    text-align: center;
  }

  .profile-m__link:last-child {
    margin-bottom: 0;
  }

  button #Capa_1 path {
    transition: fill 0.2s;
  }

  button:hover #Capa_1 path {
    fill: #237ACF;
    transition: fill 0.2s;
  }

  .blue-icon #Capa_1 path {
    fill: #237ACF;
    transition: fill 0.2s;
  }
</style>