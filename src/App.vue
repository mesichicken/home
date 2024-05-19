<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="site">
    <header>
      <RouterLink class="title-link" to="/" >
        <div class="title">
          <img src="@/assets/mesi.png" class="icon" />
          <h1>mesiホーム</h1>
        </div>
      </RouterLink>

      <div class="nav">
        <RouterLink to="/" >
          <button class="nes-btn is-warning">ブログ</button>
        </RouterLink>
        <RouterLink to="/me" >
          <button class="nes-btn is-warning">プロフィール</button>
        </RouterLink>
      </div>
    </header>

    <div class="main-content">
      <RouterView />
    </div>

    <div class="footer">
      <p>© 2024 mesi</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site{
  background-color: #5ca8cf;
  color: white;
  font-family: "NuKinakoMochiRegFont";
  padding: 0 20%;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
}
.main-content {
  flex: 1;
}
header {
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: black solid 1px;
}
.nes-btn {
  margin-top: 10px;
  margin-left: 20px;
}
.title-link{
  text-decoration: none;
  color: inherit;
}
.title{
  display: flex;
  font-size: 20px;
  margin-top: 8px;
  .icon {
    width: 50px;
    height: 50px;
    margin-top: 5px;
    margin-right: 10px;
  }
}
.footer{
  text-align: center;
}

/* スマホ */
@media screen and (max-width: 768px) {
  .site {
    padding: 0 10px;
  }
  header {
    padding: 10px;
  }
  .title {
    font-size: 16px;
  }
  .icon {
    width: 30px;
    height: 30px;
  }
  .nes-btn {
    margin-top: 5px;
    margin-left: 10px;
  }
}
</style>