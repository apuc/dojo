<template>
  <div>
    <article class="news"
             v-for="(post, index) in news"
             :key="post.title"
    >
      <component :is="post.type"
                 :text="post.text"
                 :post="post.post"
      ></component>

      <footer class="news__footer">
        <button class="btn_nulled news__like">
          <svg v-if="!post.isLiked"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           version="1.1"
           id="Capa_1"
           x="0px"
           y="0px"
           viewBox="0 0 51.997 51.997" s
           tyle="enable-background:new 0 0 51.997 51.997;"
           xml:space="preserve"
           width="20px"
           height="20px"
           class="icon"
        >
          <g>
            <path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905   c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478   c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014   C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25   c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826   c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514   c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z" fill="white"/>
          </g>
        </svg>

        <svg v-else
             version="1.1"
             id="Capa_1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             x="0px"
             y="0px"
             viewBox="0 0 50 50"
             style="enable-background:new 0 0 50 50;"
             xml:space="preserve"
             width="20px"
             height="20px"
             class="icon"
          >
          <path style="fill:#F30D46;" d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
            c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
            c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
        </svg>

          <span class="likes">
          {{post.likes >= 1000 ? `${Math.round(post.likes / 1000)}K` : post.likes}}
        </span>
        </button>

        <div class="news__views">
          <svg xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           version="1.1"
           id="Capa_1"
           x="0px"
           y="0px"
           viewBox="0 0 488.85 488.85"
           style="enable-background:new 0 0 488.85 488.85;"
           xml:space="preserve"
           width="20px"
           height="20px"
           class="icon"
        >
          <g>
            <path d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2   s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025   c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3   C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7   c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z" fill="#E0E0E0"/>
          </g>
        </svg>

          <span class="views">
            {{post.views >= 1000 ? `${Math.round(post.views / 1000)}K` : post.views}}
          </span>
        </div>
      </footer>
    </article>
  </div>
</template>

<script>
  import mushroom from '../../assets/3.jpg';
  import smoke from '../../assets/5.jpg';
  import wave from '../../assets/2.jpg';
  import ProfileFeedPost from './ProfileFeedPost';
  import ProfileFeedAttachments from './ProfileFeedAttachments';
  import ProfileFeedCourse from './ProfileFeedCourse';

  export default {
    name: "ProfileFeedNews",
    components: {ProfileFeedPost, ProfileFeedAttachments, ProfileFeedCourse},
    computed: {
    },
    data() {
      return {
        news: [
          {
            text: '',
            post: {
              event: 'Успешное окончание курса от PinkBing',
              title: 'Веб-разработчик от А до Б и В и Я тоже',
              user: 'Тимофея Агинского',
              achievements: ['', '', '', ''],
            },
            likes: 900,
            views: 2000,
            type: 'ProfileFeedCourse',
            isLiked: true
          },
          {
            text: 'Стоит воспринимать гриб как радиоволну и сильную личность. Зачем, почему я не юзаю lorem? а ? <br/> <a href="#Статьи@Тимофей_Агинский">#Статьи@Тимофей_Агинский</a>',
            post: {
              title: 'Ленин-гриб',
              author: 'Тимофей Агинский',
              imgSrc: mushroom
            },
            likes: 900,
            views: 2000,
            type: 'ProfileFeedPost',
            isLiked: false
          },
          {
            text: 'Стоит воспринимать гриб как радиоволну и сильную личность. <br/> <a href="#Статьи@Тимофей_Агинский">#Статьи@Тимофей_Агинский</a>',
            post: {
              imgSrc: [smoke, mushroom, wave]
            },
            likes: 900,
            views: 2000,
            type: 'ProfileFeedAttachments',
            isLiked: false
          }
        ]
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
  .news__like,
  .news__views {
    display: flex;
    align-items: center;
  }

  .news__footer {
    justify-content: space-between;
    margin-top: 30px;
  }

  .icon {
    margin-right: 6px;
  }

  .likes {
    font-size: 16px;
  }

  .views {
    font-size: 14px;
    color: #E0E0E0;
  }
</style>