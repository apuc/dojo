<template>
  <div id="app">
    <component :is="layout">
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </component>
  </div>
</template>

<script>
  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || 'main') + '-layout'
      },
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=cyrillic');

  body {
    margin: 0;

    overflow-x: hidden;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Segoe UI', 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3d3d3d;
  }

  .btn {
    padding: 0;
    border: none;
    background-color: white;
  }

  .btn__transparent {
    background-color: transparent;
  }

  .slide-enter-active, .slide-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }
  .slide-enter, .slide-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }

  .btn__mr20 {
    margin-right: 20px;
  }

  .btn__mr20:last-child {
    margin-right: 0;
  }
</style>
