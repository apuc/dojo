<template>
  <div>
    <header class="news__header">
      <div v-html="text"></div>
    </header>

    <div class="news-attachments">
      <ProfileFeedAttachmentsImage v-for="(img, index) in post.imgSrc"
                                   :key="index"
                                   :imgSrc="img"
                                   :index="index"
      />
    </div>
  </div>
</template>

<script>
  import ProfileFeedAttachmentsImage from "./ProfileFeedAttachmentsImage";
  export default {
    name: "ProfileFeedAttachments",
    components: {ProfileFeedAttachmentsImage},
    computed: {
    },
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
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
  .news__header {
    margin-bottom: 25px;
  }

  .news-attachments {
    overflow: auto;
    height: 346px;
  }


</style>