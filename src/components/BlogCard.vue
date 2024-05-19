<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  blog: {
    type: Object,
    required: true
  },
})

// 日付をフォーマットする関数
const formattedDate = computed(() => {
  const date = new Date(props.blog.published_at);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // getMonth()は0から始まるので+1する
  const day = date.getDate();
  return `${year}年${month.toString().padStart(2, '0')}月${day.toString().padStart(2, '0')}日`;
});

</script>

<template>
  <div class="card">
    <a :href="`https://zenn.dev${blog.path}`" target="_blank" rel="noopener noreferrer">
      <el-card :body-style="{ padding: '0px' }">
        <div class="image">{{ blog.emoji }}</div>
        <div class="content">
          <span class="title">{{ blog.title }}</span>
          <div class="bottom">
            <time class="time">{{ formattedDate }}</time>
            <el-button text class="button">Open</el-button>
          </div>
        </div>
      </el-card>
    </a>
  </div>
</template>

<style lang="scss" scoped>
a:hover {
  text-decoration: none;
}

.card {
  width: 300px;
  margin: 30px;
  border: black solid 4px;
  background-color: #c9c9c9;
}

.content {
  min-height: 150px;
  display: flex;
  flex-wrap: wrap;
  padding: 14px;
  background-color: #c9c9c9;

  .title {
    font-weight: bold;
    font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif;
  }
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  width: 100%;
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150px;
  background-color: #ffffff;
}

/* タブレット */
@media screen and (max-width: 1024px) {
}

/* スマホ */
@media screen and (max-width: 768px) {
  .card {
    width: 100%;
  }
}
</style>