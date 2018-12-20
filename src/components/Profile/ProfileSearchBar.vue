<template>
  <div class="search-bar headroom" :class="{'headroom--unpinned': scrolled}" v-scroll="handleScroll">
    <form class="search-bar__form mr35">
      <input class="search-bar__input" type="search">

      <button type="submit" class="btn_nulled search-bar__submit">
        <img src="../../assets/icons/search.svg" width="20px" height="20px" alt="">
      </button>
    </form>

    <button type="button" class="btn_nulled mr35">
      <img src="../../assets/icons/menu.svg" width="17" height="17" alt="">
    </button>

    <div class=" mr35">
      <router-link to="#">Популярные курсы</router-link>
    </div>

    <div class=" mr35">
      <router-link to="#">Новые курсы</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileSearchBar",
    data() {
      return {
        limitPosition: 300,
        scrolled: false,
        lastPosition: 0
      }
    },
    methods: {
      handleScroll(evt, el) {
        if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
          this.scrolled = true;
          // move up!
        }

        if (this.lastPosition > window.scrollY) {
          this.scrolled = false;
          // move down
        }

        this.lastPosition = window.scrollY;
        // this.scrolled = window.scrollY > 250;
      }
    },
  }
</script>

<style scoped>
  .headroom {
    will-change: transform;
    transition: transform 100ms linear;
  }

  .headroom--unpinned {
    transform: translateY(-100%);
  }

  .search-bar {
    position: fixed;
    z-index: 3;

    display: flex;
    align-items: center;
    width: calc(100% - 250px);
    box-sizing: border-box;
    padding: 20px;

    background-color: #212121;
  }

  .search-bar__form {
    position: relative;
    z-index: 1;

    width: 570px;
  }

  .search-bar__input {
    position: relative;
    z-index: 1;

    width: 100%;
    padding: 12px;

    color: white;

    background-color: #181717;
    border-radius: 62px;
    border: none;
  }

  .search-bar__submit {
    position: absolute;
    z-index: 2;

    top: 10px;
    right: 20px;
  }
</style>