<template>
  <div class="profile">
    <p class="nes-balloon from-left nes-pointer is-dark">
      MESIと申します。開発がしたいです。
    </p>
    <img src="@/assets/mesi.png" class="icon" />
    <h2>経歴</h2>
    <div class="career">
      <p>
        1995年2月24日生まれ。<br>
        2015年4月に2浪して名古屋大学に入学。<br>
        ITとは全く関係がない学科であったが、在学中にWordPressでブログを開設したことがきっかけでWebに興味を持ち始める。<br>
        2019年3月に卒業後、専門学校で2年ほどWebサイトについて学ぶ。<br>
        2021年4月に横浜の会社に入社し、Webエンジニアとして働いている。
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

.career{
  font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif;
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
}
</style>