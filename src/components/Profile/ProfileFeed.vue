<template>
  <main class="feed-main">
    <div class="feed">
      <ProfileFeedNews />
    </div>

    <div>
      <ProfileCourses v-for="(course, index) in courses"
                      :key="index"
                      :title="course.title"
                      :language="course.language"
                      :mentor="course.mentor"
                      :cost="course.cost"
                      :views="course.views"
      />
    </div>
  </main>
</template>

<script>
  import ProfileFeedNews from "./ProfileFeedNews";
  import ProfileCourses from "./ProfileCourses";

  export default {
    name: "ProfileMain",
    components: {ProfileCourses, ProfileFeedNews},
    data() {
      return {
        courses: [
          {
            title: 'Python от А до Я',
            language: 'Python',
            mentor: 'Пьянство',
            cost: 'Бесплатно',
            views: 2000
          },
          {
            title: 'Python от А до Я',
            language: 'Арбалет',
            mentor: 'Шая',
            cost: '7.900 р',
            views: 3256
          },
          {
            title: 'Python от А до Я',
            language: 'Пираты',
            mentor: 'Секира',
            cost: 'Бесценно',
            views: 456
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .feed-main {
    position: relative;
    z-index: 1;

    flex: 1 1 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 30px;
    padding-right: 50px;
    box-sizing: border-box;

    background-color: #2a2a2a;
  }
</style>