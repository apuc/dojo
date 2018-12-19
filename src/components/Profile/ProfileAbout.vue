<template>
  <main class="main">
    <div class="main__about">
      <section class="user__about">
        <h2 class="about__title">Обо мне</h2>

        <p class="about__desc">{{userData.desc}}</p>
      </section>

      <section class="user__skills">
        <h2 class="about__title">Навыки</h2>

        <div class="skills">
          <button type="button"
                  class="btn btn_blacker btn_small mr20 skills__skill"
                  v-for="(skill, index) in userData.skills"
                  :key="skill"
          >
            {{skill}}
          </button>
        </div>
      </section>

      <section class="user__contacts">
        <h2 class="about__title">Контакты</h2>

        <div class="user__social">
          <router-link class="mr50"
                       v-for="(socialLink, index) in userData.social"
                       :key="socialLink"
                       :to="socialLink"
          >
            <img :src="socIcons[index]"
                 width="62"
                 height="62"
                 alt=""
            >
          </router-link>
        </div>

        <div class="user__contacts-etc">
          <a :href="`mailto:${userData.email}`" class="user__contact">
            <img src="../../assets/icons/email.svg"
                 width="12"
                 height="12"
                 alt=""
            >
            {{userData.email}}
          </a>

          <a :href="`tel:${userData.tel}`" class="user__contact">
            <img src="../../assets/icons/phone.svg"
                 width="12"
                 height="12"
                 alt=""
            >
            {{userData.tel}}
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
  import fb_icon from "../../assets/icons/fb.svg";
  import vk_icon from "../../assets/icons/vk.svg";
  import git_icon from "../../assets/icons/github.svg";

  export default {
    name: "ProfileAbout",
    data() {
      return {
        userData: {
          desc: 'Всем привет, меня зовут Тимофей Агинский я пока не радиоволна, но очень хочу, а главное стремлюсь ей стать по образу и подубию вождя мирового пролетариата.',
          skills: ['Python', 'Django', 'Выезжаю на стрелки'],
          social: ['https://vk.com', 'https://github.com', 'https://facebook.com'],
          email: 'timofey.aginsky@gmail.com',
          tel: '7 900 366 76 06'
        },
        socIcons: [vk_icon, git_icon, fb_icon]
      }
    }
  }
</script>

<style scoped>
  .main__about {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 570px;
    margin: 0 auto;
    margin-top: 70px;

    text-align: center;
  }

  .about__title {
    margin: 0;

    font-size: 24px;
    font-weight: 300;
  }

  .about__desc {
    margin: 0;
    font-weight: 300;
  }

  .user__skills,
  .user__contacts {
    margin-top: 30px;
  }

  .skills {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .skills__skill,
  .about__desc,
  .user__social {
    margin-top: 13px;
  }

  .user__contacts-etc {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .user__contact {
    margin-top: 13px;
  }
</style>