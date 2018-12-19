<template>
  <article class="news">
    <div class="news-body">
      <div class="course">
        <div class="course__header">
          <p class="course__event">
            {{title}}
          </p>

          <p class="course__title">
            {{desc}}
          </p>
        </div>

        <hr class="divider">

        <div class="course__body">
          <p class="course__">Навыки которые вы приобретёте:</p>

          <div class="course__skills">
            <span class="btn btn_blacker btn_extraSmall course__skill" v-for="(skill, index) in skills">
              {{skill}}
            </span>
          </div>
        </div>

        <div class="course__footer">
          <router-link to="#" class="btn btn_pink mr20">Узнать о курсе</router-link>

          <span>{{price}}</span>
        </div>
      </div>
    </div>

    <footer class="news__footer">
      <span class="participants">
        {{participants >= 1000 ? `${Math.round(participants / 1000)}K` : participants}} поступивших
      </span>
    </footer>
  </article>
</template>

<script>
  export default {
    name: "ProfileCoursesCourse",
    props: {
      title: {
        type: String,
        required: true
      },
      desc: {
        type: String,
        required: true
      },
      skills: {
        type: Array,
        required: true
      },
      price: {
        type: String,
        default: 'Бесплатно'
      },
      participants: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
  .news {
    width: 670px;
    height: auto;
    margin-bottom: 30px;
    padding: 20px 30px;
    box-sizing: border-box;

    background-color: #212121;
    border-radius: 8px;
  }

  .news__footer {
    padding-top: 15px;
    border-top: 1px solid #424242;
  }

  .news__footer,
  .news__views {
    display: flex;
    align-items: center;
  }

  .course {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .course__title,
  .course__event {
    margin: 0;
  }

  .course__event {
    font-weight: 300;
    font-size: 20px;
  }

  .divider {
    width: 77px;
    box-sizing: border-box;
    margin: 25px 0;

    color: rgba(255, 255, 255, 0.15);
    border-top: none;
  }

  .course__skill {
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .course__skill:last-child {
    margin-right: 0;
  }

  .course__footer {
    margin-top: 35px;
  }

  .news__footer {
    justify-content: space-between;
    margin-top: 30px;
  }

  .participants {
    margin-left: auto;
    color: #E0E0E0;
  }
</style>