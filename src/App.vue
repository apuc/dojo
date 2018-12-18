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

  button, a {
    font-weight: 300;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', 'Segoe UI', sans-serif;
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Segoe UI', 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: white;
  }

  .nav-link {
    display: inline-flex;
    align-items: center;

    font-size: 18px;
    /*font-weight: 400;*/
    letter-spacing: 0.36px;
    color: white;
    text-decoration: none;
  }

  .nav-link::before {
    content: '';
    position: relative;
    top: 0;

    display: block;
    width: 9px;
    height: 9px;
    margin-right: 15px;

    border: 1px solid white;
    border-top: none;
    border-right: none;
    transform: rotate(45deg);
  }

  .btn {
    padding: 7px 58px;

    font-size: 14px;
    color: white;

    border: none;
    cursor: pointer;
    border-radius: 6px;
  }

  .btn_small {
    padding: 7px 30px;
  }

  .btn_transparent {
    background-color: transparent;
  }

  .btn_white {
    background-color: white;
  }
  
  .btn_blue {
    background-color: #237ACF;
  }

  .btn_blue:hover,
  .btn_blue:active,
  .btn_blue:focus {
    background-color: #175b9e;
  }

  .btn_blue[disabled] {
    background-color: #6a95be;
    pointer-events: none;
  }

  .btn_pink {
    background-color: #f30d46;
  }

  .btn_pink:hover,
  .btn_pink:active,
  .btn_pink:focus {
    background-color: #dc1446;
  }

  .btn_pink[disabled] {
    background-color: #e75075;
    pointer-events: none;
  }

  .btn_black {
    background-color: #2a2a2a;
    border-radius: 4px;
  }

  .btn_black:hover,
  .btn_black:active,
  .btn_black:focus {
    background-color: #1a1a1a;
  }

  .btn_black[disabled] {
    background-color: #858585;
    pointer-events: none;
  }

  .btn_rounded {
    border-radius: 27px;
  }

  .mr20 {
    margin-right: 20px;
  }

  .mr20:last-child,
  .mr35:last-child {
    margin-right: 0;
  }

  .mr35 {
    margin-right: 35px;
  }
  
  .btn_nulled {
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .slide-enter-active, .slide-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }
  .slide-enter, .slide-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
</style>
