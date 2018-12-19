<template>
  <div class="course">
    <p class="course__title">{{title}}</p>

    <div class="course__info">
      <div class="course__lang">
        <span class="btn btn_blacker-noHover btn_extraSmall mr10">{{language}}</span>
      </div>

      <div class="course__mentor mr35">
        <span class="btn btn_blacker-noHover btn_extraSmall">{{mentor}}</span>
      </div>

      <div class="course__price mr20">
        <button type="button" class="btn btn_blue btn_small">{{cost}}</button>
      </div>

      <div class="course__views">
        <span class="">{{views}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileFeedCourses",
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
    margin-top: 20px;
  }

  .course__title {
    margin: 0;

    font-size: 18px;
    font-weight: 300;
  }

  .course__info {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin-top: 7px;
    padding: 20px;

    background-color: #212121;
    border-radius: 8px;
  }
</style>