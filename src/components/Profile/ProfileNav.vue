<template>
  <aside>
    <header>
      <router-link type="button"
                   class="btn btn__transparent btn__mr20"
                   to="/settings"
      >
        <img src="../../assets/icons/settings.svg" width="21" height="21" alt="">
      </router-link>

      <button type="button" class="btn btn__transparent btn__mr20">
        <img src="../../assets/icons/profile.svg" width="21" height="21" alt="">
      </button>
    </header>

    <ProfileNavGroup :data="study"/>
    <ProfileNavGroup :data="communication"/>
    <ProfileNavGroup :data="startups"/>
  </aside>
</template>

<script>
  import ProfileNavGroup from "./ProfileNavGroup";
  import edit from '../../assets/icons/edit.svg'
  import play_button from '../../assets/icons/play-button.svg'

  export default {
    name: "ProfileNav",
    components: {ProfileNavGroup},
    data() {
      return {
        study: {
          title: 'Обучение',
          info: [
            {
              link: '/feed',
              name: 'Лента'
            },
            {
              link: '/courses',
              name: 'Курсы'
            },
          ],
          fieldsWithIcons: [
            {
              link: '/create-course',
              name: 'Создать курс',
              imgSrc: edit
            },
            {
              link: '/join-course',
              name: 'Поступить на курс',
              imgSrc: play_button
            },
          ],
          notifications: {
            link: '/notifications',
            name: 'Уведомления',
            counter: 0
          },
        },
        communication: {
          title: 'Общение',
          info: [
            {
              link: '/groups',
              name: 'Группы'
            },
            {
              link: '/messages',
              name: 'Сообщения'
            }
          ],
        },
        startups: {
          title: 'Стартапы',
          info: [
            {
              link: '/find-team',
              name: 'Найти команду'
            },
            {
              link: '/create-team',
              name: 'Создать стартап'
            }
          ],
        }
      }
    }
  }
</script>

<style scoped>
  aside {
    position: fixed;

    width: 250px;
    height: 100%;
    padding: 25px;
    box-sizing: border-box;

    font-family: 'Roboto', 'Segoe UI', sans-serif;

    background-color: #212121;
  }

  header {
    display: flex;
    align-items: center;
  }

  .settings {
    margin-left: auto;
  }
</style>