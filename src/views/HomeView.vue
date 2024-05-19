<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BlogCard from "@/components/BlogCard.vue"
import Get from "@/api/home/index"
import type { Blog } from "@/types"

const blogList = ref<Blog[]>()

onMounted(async () => {
  blogList.value = await Get.execute()
})

</script>

<template>
  <div class="card-container">
    <BlogCard
      v-for="blog in blogList"
      :key="blog.id"
      :blog="blog"
    />
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
}

.content {
  background-color: pink;
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
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
  display: block;
}

/* スマホ */
@media (max-width: 768px) {
}
</style>