<template>
  <div class="profile">
    <p class="nes-balloon from-left nes-pointer is-dark">
      MESIと申します。開発がしたいです。
    </p>
    <img src="@/assets/mesi.png" class="icon" />
    <h2>経歴</h2>
    <div class="career normal-font">
      <p>
        1995年2月24日生まれ。<br>
        2015年4月に2浪して名古屋大学に入学。<br>
        ITとは全く関係がない学科であったが、在学中にWordPressでブログを開設したことがきっかけでWebに興味を持ち始める。<br>
        2019年3月に卒業後、専門学校で2年ほどWebサイトについて学ぶ。<br>
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

    <h2>趣味</h2>
    <div class="hobby normal-font">
      <p>
        デスクづくりと技術書が好き。<br>
        <img src="@/assets/images/desk.jpg" class="hobby-image" />
        <img src="@/assets/images/books.jpeg" class="hobby-image" />
      </p>
    </div>

    <div class="sns">
      <a href="https://twitter.com/MESIchicken" class="sns-icon">
        <i class="nes-icon twitter is-large"></i>
      </a>
      <a href="https://github.com/mesichicken" class="sns-icon"><i class="nes-icon github is-large"></i></a>
    </div>
  </div>
</template>

<style>
.profile{
  margin-top: 100px;
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

  .sns{
    margin-top: 50px;
    margin-bottom: 10px;
  }

  .hobby-image{
    width: 100%;
  }
}
</style>