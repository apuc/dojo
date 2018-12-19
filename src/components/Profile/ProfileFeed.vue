<template>
  <main class="main">
    <div class="feed">
      <ProfileFeedNews />
    </div>

    <div class="feed-courses">
      <ProfileFeedCourses v-for="(course, index) in courses"
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
  import ProfileFeedCourses from "./ProfileFeedCourses";

  export default {
    name: "ProfileMain",
    components: {ProfileFeedCourses, ProfileFeedNews},
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
  .feed-courses {
    position: sticky;
    top: 0;
  }
</style>