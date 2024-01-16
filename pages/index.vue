<script setup>
import PostItem from "~/components/blog/PostItem.vue";

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
  <div class="body-wrap flex flex-1 flex-col z-10">
    <div class="container flex flex-wrap max-w-[1200px] m-auto w-full gap-5 mt-2.5 flex-1">
      <div class="main-wrap w-full lg:w-[70%] flex-1 mb-2.5">
        <div class="post-archive">
          <div class="archive-wrap">
            <div class="archive-list">
              <PostItem
                  v-for="(post, index) in posts" :key="index"
                  :index="index"
                  :path="post._path"
                  :title="post.title"
                  :description="post.description"
                  :image="post.cover"
                  :date="new Date(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})"
              />
            </div>
          </div>
        </div>
      </div>
      <aside class="max-w-full p-4 lg:p-0 lg:max-w-[300px] w-full flex flex-col">
        <div class="widget">
          <div class="widget-body">
            <div class="widget-author relative">
              <div class="widget-author-container relative z-2 p-8 bg-[#f8f9fa] text-[var(--color-primary)] dark:bg-[#333]">

              </div>
            </div>
          </div>
        </div>
        <div class="widget">
          <div class="widget-body">
            <div class="title-block-wrap">
              <h5 class="title-block">
                Instagram
              </h5>
            </div>
          </div>
        </div>
        <div class="widget">
          <div class="widget-body">
            <div class="title-block-wrap">
              <h5 class="title-block">
                Trending this week
              </h5>
            </div>
          </div>
        </div>
        <div class="widget">
          <div class="widget-body">
            <div class="title-block-wrap">
              <h5 class="title-block">
                follow us
              </h5>
            </div>
            <div class="social-links-wrap">
              <div class="social-links-item flex flex-wrap justify-start my-0 -mx-0.5">
                <div class="social-links-item flex p-0 mb-px flex-[0_0_33.33%] max-w-[33.33%]">
                  <a href=""></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.widget{
  margin-bottom: 2.5rem;
}
</style>
