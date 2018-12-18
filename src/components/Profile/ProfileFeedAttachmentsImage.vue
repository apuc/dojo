<template>
  <a href="#" class="attachment-link">
    <img alt=""
         ref="attachmentImg"
         class="post-img"
         :src="imgSrc"
    >
  </a>
</template>

<script>
  export default {
    name: "ProfileFeedAttachmentsImage",
    props: {
      imgSrc: {
        type: String,
        required: true,
      },
      index: {
        type: Number,
        required: true
      }
    },
  }
</script>

<style scoped>
  .attachment-link {
    position: relative;

    float: left;
    display: block;
    width: calc(50% - 10px);
    height: calc(50% - 10px);
    margin-bottom: 20px;

    font-size: 0;
  }

  .attachment-link:first-child {
    height: 100%;
    margin-bottom: 0;
    margin-right: 20px;
  }

  .attachment-link:last-child {
    margin-bottom: 0;
  }

  .post-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>