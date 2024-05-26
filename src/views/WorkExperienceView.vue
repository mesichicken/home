<template>
  <div class="work-experience normal-font">
    <div class="project">
      <h2>基幹システム開発</h2>

      <h3>プロジェクト概要</h3>
      本社、店舗が使用する基幹システムの開発保守
      <h3>期間</h3>
      <p>2021 ~ 2023</p>

      <h3>使用技術</h3>
      <ul>
        <li>Java / Spring</li>
        <li>JavaScript</li>
        <li>SQL Server</li>
      </ul>

      <h3>開発メンバー</h3>
      <ul>
        <li>マネージャー x 1</li>
        <li>エンジニア x 3</li>
      </ul>

      <h3>担当内容</h3>
      エンジニアとして参加し、バックエンド、フロントエンドを担当した。
      <ul>
        <li>テーブル設計</li>
        <li>APIの設計/実装</li>
        <li>画面設計/実装</li>
        <li>コードレビューと技術的フォロー</li>
        <li>アラート監視</li>
        <li>問い合わせ対応</li>
      </ul>
    </div>

    <div class="project">
      <h2>店舗用アプリ開発</h2>

      <h3>プロジェクト概要</h3>
      店舗が使用するアプリの開発保守

      <h3>期間</h3>
      <p>2022 ~ 2023</p>

      <h3>使用技術</h3>
      <ul>
        <li>Ruby / Ruby on Rails</li>
        <li>JavaScript / Nuxt.js</li>
        <li>MySQL</li>
      </ul>

      <h3>開発メンバー</h3>
      <ul>
        <li>マネージャー x 1</li>
        <li>リードエンジニア x 1</li>
        <li>エンジニア x 2</li>
      </ul>

      <h3>担当内容</h3>
      リードエンジニアとして以下を担当した。
      <ul>
        <li>テーブル設計</li>
        <li>APIの設計/実装</li>
        <li>画面設計/実装</li>
        <li>コードレビューと技術的フォロー</li>
        <li>アラート監視</li>
      </ul>
    </div>

    <div class="project">
      <h2>転職サイト開発</h2>

      <h3>プロジェクト概要</h3>
      転職サイトの開発保守

      <h3>期間</h3>
      <p>2024 ~</p>

      <h3>使用技術</h3>
      <ul>
        <li>Ruby / Ruby on Rails</li>
        <li>JavaScript / Nuxt.js</li>
        <li>MySQL</li>
      </ul>

      <h3>開発メンバー</h3>
      <ul>
        <li>マネージャー x 1</li>
        <li>エンジニア x 2</li>
      </ul>

      <h3>担当内容</h3>
      エンジニアとして参加し、バックエンド、フロントエンドを担当している。
      <ul>
        <li>テーブル設計</li>
        <li>APIの設計/実装</li>
        <li>画面設計/実装</li>
        <li>アラート監視</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 24px;
  margin-top: 40px;
  border-bottom: solid 1px;
}

h3 {
  font-size: 20px;
  margin-top: 20px;
}

.work-experience {
  margin-top: 100px;

  .project {
    margin-bottom: 50px;
  }
}


/* スマホ */
@media screen and (max-width: 768px) {
  .work-experience{
    margin-top: 20px;
  }
}
</style>
