<template>
  <div>
    <header class="news__header">
      <div v-html="text"></div>
    </header>

    <div class="news__body">
      <router-link v-if="post"
                   tag="div"
                   to="/post-name"
                   class="news__post post"
      >
        <img class="post__img" :src="post.imgSrc" alt="">

        <div class="post__data">
          <p class="post__title">{{post.title}}</p>
          <p class="post__author">{{post.author}}</p>
          <span class="btn btn_blue btn_rounded post__read">Читать</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileFeedPost",
    props: {
      text: {
        type: String,
        required: false
      },
      post: {
        type: Object,
        required: false
      }
    },
  }
</script>

<style scoped>
  .news__header {
    margin-bottom: 25px;
  }

  .news__post {
    position: relative;
    z-index: 1;

    width: 100%;
    height: 180px;

    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
  }

  .post__data {
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    background-color: rgba(0,0,0, 0.5);
  }

  .post__img {
    position: absolute;
    z-index: 1;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  .post__title {
    margin: 0;
    font-size: 28px;
    font-weight: 500;
  }

  .post__author {
    margin: 0;
    font-size: 14px;
  }

  .post__read {
    margin-top: 17px;
  }
</style>