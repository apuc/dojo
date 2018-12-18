<template>
  <div class="news-body">
    <div class="course">
      <div class="course__header">
        <p class="course__event">
          {{post.event}}
        </p>

        <p class="course__title">
          {{post.title}}
        </p>
      </div>

      <hr class="divider">

      <div class="course__body">
        <p class="course__user">Достижения {{post.user}}:</p>

        <div class="course__achievements">
          <div class="course__achievement" v-for="(achievement, index) in post.achievements">
            {{achievement}}
          </div>
        </div>
      </div>

      <div class="course__footer">
        <router-link to="#" class="btn btn_blue">Узнать о курсе</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileFeedCourseFinish",
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .course {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .course__title,
  .course__event,
  .course__user {
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

    color: rgba(255, 255, 255, 0.15);border-top: none;
  }

  .course__user {
    margin: 0;
  }

  .course__achievements {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }

  .course__achievement {
    width: 60px;
    height: 60px;
    margin-right: 10px;

    background-color: #2a2a2a;
    border-radius: 50%  ;
  }

  .course__achievement:last-child {
    margin-right: 0;
  }

  .course__footer {
    margin-top: 35px;
  }
</style>