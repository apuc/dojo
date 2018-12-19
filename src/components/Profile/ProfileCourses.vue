<template>
  <main class="main main_courses">
    <ProfileCoursesCourse v-for="(course, index) in courses"
                          :key="index"
                          :title="course.title"
                          :desc="course.desc"
                          :skills="course.skills"
                          :price="course.price"
                          :participants="course.participants"
    />
  </main>
</template>

<script>
  import ProfileCoursesCourse from "./ProfileCoursesCourse";
  export default {
    name: "ProfileCourses",
    components: {ProfileCoursesCourse},
    data() {
      return {
        courses: [
          {
            title: 'Python от А до Я',
            desc: 'Углублённое изучение Python, от лучшего преподавателя',
            skills: ['Основы Python', 'Динамическая типизация', 'Основы ООП Python', 'Django Python', 'Kivy Python'],
            price: '9 300 P',
            participants: 32426
          },
          {
            title: 'Python от А до Я',
            desc: 'Углублённое изучение Python, от лучшего преподавателя',
            skills: ['Основы Python', 'Динамическая типизация', 'Основы ООП Python', 'Django Python', 'Kivy Python'],
            price: 'Бесплатно',
            participants: 3246
          },
          {
            title: 'Python от А до Я',
            desc: 'Углублённое изучение Python, от лучшего преподавателя',
            skills: ['Основы Python', 'Динамическая типизация', 'Основы ООП Python', 'Django Python', 'Kivy Python'],
            price: '9 300 P',
            participants: 176
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .main_courses {
    flex-direction: column;
  }
</style>