<script setup lang="ts">
import ArticleItem from "~/components/article/ArticleItem.vue";

useSeoMeta({
  title: 'Home'
})

const {data: posts} = await useAsyncData('posts', () => queryContent('/blog')
    .where({_extension: 'md'})
    .sort({date: -1})
    .find())

useSeoMeta({
  title: 'Blog',
  ogTitle: 'Blog',
  description: "This is my blog list",
  ogDescription: 'This is my blog list'
})
</script>

<template>
  <Notice/>
  <main class="main-content">
    <div class="main-wrap">
      <div class="post-archive">
        <div class="archive-wrap">
          <div class="archive-list">
            <ArticleItem v-for="(post, index) in posts"
                         :key="index"
                         :path="post._path"
                         :index="index"
                         :title="post.title"
                         :description="post.description"
                         :date="new Date(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
