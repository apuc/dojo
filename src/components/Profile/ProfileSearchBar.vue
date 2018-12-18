<template>
  <div class="search-bar">
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
    name: "ProfileSearchBar"
  }
</script>

<style scoped>
  .search-bar {
    display: flex;
    align-items: center;
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