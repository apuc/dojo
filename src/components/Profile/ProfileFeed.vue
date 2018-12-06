<template>
  <main>
    <div class="feed">
      <ProfileFeedNews v-for="(article, index) in news"
                       :text='article.text'
                       :post="article.post"
                       :likes="article.likes"
                       :views="article.views"
                       :key="index"
      />
    </div>

    <div>

    </div>
  </main>
</template>

<script>
  import ProfileFeedNews from "./ProfileFeedNews";
  import mushroom from '../../assets/3.jpg';

  export default {
    name: "ProfileMain",
    components: {ProfileFeedNews},
    data() {
      return {
        news: [
          {
            text: 'Стоит воспринимать гриб как радиоволну и сильную личность. Зачем, почему я не юзаю lorem? а ? <br/> <a href="#Статьи@Тимофей_Агинский">#Статьи@Тимофей_Агинский</a>',
            post: {
              title: 'Ленин-гриб',
              author: 'Тимофей Агинский',
              imgSrc: mushroom
            },
            likes: 900,
            views: 2000
          }
        ]
      }
    }
  }
</script>

<style scoped>
  main {
    position: relative;
    z-index: 1;

    flex: 1 1 auto;
    padding: 30px;
    padding-right: 50px;
    box-sizing: border-box;

    background-color: #2a2a2a;
  }
</style>