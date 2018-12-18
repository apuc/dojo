<template>
  <div class="course">
    <p class="course__title">{{title}}</p>

    <div class="course__info">
      <div class="course__lang btn btn_black btn_small">
        {{language}}
      </div>

      <div class="course__mentor btn btn_black btn_small">
        {{mentor}}
      </div>

      <div class="course__price btn btn_blue">
        {{cost}}
      </div>

      <div class="course__views">
        {{views}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileCourses",
    props: {
      title: {
        type: String,
        required: true
      },
      language: {
        type: String,
        required: true
      },
      mentor: {
        type: String,
        required: true
      },
      cost: {
        type: String,
        required: true
      },
      views: {
        type: Number,
        required: true
      },
    }
  }
</script>

<style scoped>
  .course {

  }

  .course__info {
    display: flex;
    align-items: center;
    padding: 20px;

    background-color: #212121;
    border-radius: 8px;
  }
</style>