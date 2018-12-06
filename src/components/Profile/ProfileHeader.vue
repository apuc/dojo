<template>
  <header>
    <div class="head">
      <router-link to="/feed" class="nav-link">Лента</router-link>

      <div class="about-btns">
        <router-link to="/achievements" class="btn btn_black mr20">Достижения</router-link>
        <router-link to="/portfolio" class="btn btn_black mr20">Портфолио</router-link>
        <router-link to="/serts" class="btn btn_black mr20">Сертификаты</router-link>
      </div>
    </div>

    <div class="info">
      <div class="info__avatar">
        <img class="info__avatar-pic" src="" alt="">
      </div>

      <div class="info__user user-info">
        <div class="user-info__head">
          <h2 class="user-info__name">Тимофей агинский</h2>
          <span class="btn btn_black user-info__type">МЕНТОР</span>
        </div>

        <div>
          <p class="user-info__status">"Сгорел сарай, гори и хата"</p>
        </div>

        <div class="user-info__etc">
          <span class="user-info__etc-span">3 курса</span>

          <span class="user-info__etc-span">1К подписчиков</span>
        </div>
      </div>
    </div>

    <div class="bottom">
      <nav class="profile-nav">
        <router-link class="profile-nav__link" to="/user/123/feed">Лента</router-link>
        <router-link class="profile-nav__link" to="/user/123/courses">Составленные курсы</router-link>
        <router-link class="profile-nav__link" to="/user/123/about">Обо мне</router-link>
      </nav>

      <div class="communication">
        <button type="button" class="btn btn_small btn_blue mr20">Написать сообщение</button>

        <button type="button" class="btn btn_small btn_pink mr20">Подписаться 10тыс.</button>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "ProfileHeader"
  }
</script>

<style scoped>
  header {
    position: relative;
    z-index: 2;

    width: 100%;
    height: 300px;
    padding-top: 25px;
    padding-right: 50px;
    padding-left: 25px;

    box-sizing: border-box;

    background-image: url(../../assets/5.jpg);
    background-size: cover;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .info {
    display: flex;
    align-items: center;
    margin-top: 85px;
  }

  .info__avatar {
    width: 98px;
    height: 98px;
    margin-right: 25px;

    background-color: #212121;
    border-radius: 7px;
  }

  .info__avatar-pic {
    width: 100%;
    height: 100%;

    object-fit: cover;
    border-radius: 7px;
  }

  .user-info__head {
    display: flex;
    align-items: flex-end;
  }

  .user-info__name {
    margin: 0;
    margin-right: 20px;
    font-size: 24px;
    font-weight: 300;
    line-height: 1;
  }

  .user-info__type {
    padding: 1px 17px;
    font-size: 11px;
    cursor: default;
  }

  .user-info__status {
    font-size: 16px;
    font-weight: 300;
    color: #E0E0E0;
    text-align: left;
  }

  .user-info__etc {
    display: flex;
    align-items: center;
  }

  .user-info__etc-span {
    margin-right: 20px;

    font-size: 13px;
    font-weight: bold;
  }

  .user-info__etc-span:last-child {
    margin-right: 0;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 31px;
  }

  .profile-nav {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .profile-nav__link {
    padding: 18px 30px;
    padding-top: 0;
    border-bottom: 2px solid transparent;
  }

  .router-link-exact-active {
    box-sizing: border-box;
    border-bottom-color: white;
  }

  .communication {
    margin-bottom: -15px;
  }
</style>