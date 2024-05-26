<template>
  <div class="profile">
    <p class="nes-balloon from-left nes-pointer is-dark">
      どうもこんにちは。MESIと申します。
    </p>
    <div class="icon-container">
      <img src="@/assets/mesi.png" class="icon" />
      <div class="sns">
        <a href="https://twitter.com/MESIchicken" class="sns-icon">
          <i class="nes-icon twitter is-large"></i>
        </a>
        <a href="https://github.com/mesichicken" class="sns-icon"><i class="nes-icon github is-large"></i></a>
      </div>
    </div>
    <h2>キャリア</h2>
    <div class="career normal-font">
      <p>
        1995年2月24日生まれ。<br>
        2015年4月に2浪して名古屋大学に入学。<br>
        ITとは全く関係がない学科であったが、在学中にWordPressで<a href="https://mesiblog.com/" class="blog-link">ブログ</a>を開設したことがきっかけでWebに興味を持ち始める。<br>
        2019年3月に大学卒業後、専門学校で2年ほどWebサイト開発について学ぶ。<br>
        2021年4月に横浜の会社に入社し、Webエンジニアとして働いている。
      </p>
    </div>

    <h2>スキル</h2>
    <div class="skill normal-font">
      <p>
        <ul>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>Nuxt</li>
          <li>Ruby</li>
          <li>Rails</li>
          <li>PHP</li>
          <li>Java</li>
        </ul>
      </p>
    </div>

    <h2>ライセンス</h2>
    <div class="license normal-font">
      <p>
        <ul>
          <li>基本情報技術者</li>
          <li>応用情報技術者</li>
        </ul>
      </p>
    </div>

    <h2>どんなエンジニアか？</h2>
    <div class="engineer normal-font">
      <p>
        車輪の再発明が好きでフレームワークやOSの中身に興味がある。<br>
        そのため、簡易的なものを自作してみたりすることがある(内容は<a href="https://github.com/mesichicken" class="blog-link">Github</a>を参照)。<br>
        また技術書を読むことが多く、新しい技術を学ぶことが好き。<br>
        定期的にZennで<a href="https://zenn.dev/mesi" class="blog-link">技術記事</a>を書いている。
      </p>
    </div>

    <h2>シュミ</h2>
    <div class="hobby normal-font">
      <p>
        デスクづくりと技術書が好き。<br>
        <img src="@/assets/images/desk.jpg" class="hobby-image" />
        <img src="@/assets/images/books.jpeg" class="hobby-image" />
      </p>
    </div>
  </div>
</template>

<style>
h2 {
  font-size: 24px;
  margin-top: 40px;
}

.profile{
  margin-top: 100px;
  .icon-container{
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
}

.blog-link{
  color: #fff;
  text-decoration: underline
}

.nes-balloon{
  display: block;
}

.normal-font{
  font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif;
}

.hobby-image{
  display: block;
  width: 500px;
  margin-top: 10px;
}

.sns{
  display: flex;
  flex-wrap: nowrap;
  margin-top: 120px;
}

.sns-icon{
  margin-right: 20px;
}

/* スマホ */
@media screen and (max-width: 768px) {
  .profile{
    margin-top: 50px;
  }

  .hobby-image{
    width: 100%;
  }
}
</style>