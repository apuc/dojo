<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
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
  body {
    margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Segoe UI', 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
