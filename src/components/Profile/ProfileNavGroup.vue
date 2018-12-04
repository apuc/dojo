<template>
  <section>
    <h5>{{data.title}}</h5>

    <nav>
        <router-link v-for="(elem, index) in data.info"
                     :key="elem.name"
                     :to="elem.link">
          {{elem.name}}
        </router-link>

        <router-link v-if="data.notifications"
                     :to="data.notifications.link"
        >
          {{data.notifications.name}}
           <span>{{data.notifications.counter}}</span>
        </router-link>

      <div v-if="data.fieldsWithIcons">
        <router-link v-for="(elem, index) in data.fieldsWithIcons"
                     :to="elem.link"
                     :key="elem.name"
        >
          {{elem.name}}
          <img :src="elem.imgSrc" width="21" height="21" alt="">
        </router-link>
      </div>
    </nav>
  </section>
</template>

<script>
  export default {
    name: "ProfileNavGroup",
    props: {
      data: {
        type: Object,
        required: true
      },
    }
  }
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 35px;
  }

  nav {
    width: 100%;
    margin: 0;
    padding: 0;

    text-align: left;
    list-style: none;
  }

  h5, li, a {
    font-weight: 300;
    color: white;
    text-decoration: none;
  }

  h5 {
    margin: 0;

    font-size: 11px;
    color: #C7C7C7;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  a {
    position: relative;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 25px;
  }

  .router-link-active {
    font-weight: 400;
  }

  .router-link-active::before {
    content: '';

    position: absolute;
    left: -25px;
    z-index: 1;

    width: 3px;
    height: 100%;

    background-color:  #FF3366;
  }
</style>