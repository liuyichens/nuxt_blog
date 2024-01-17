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
              <div
                  class="widget-author-container relative pb-8 z-2 bg-[#f8f9fa] text-[var(--color-primary)] dark:bg-[#333]">
                <div class="author-back-image">
                  <img src="/author_background_image.webp" alt="author"
                       class="max-w-full w-full h-auto max-h-[110px] entered loading">
                </div>
                <div class="author-avatar text-center absolute top-16 left-1/2 -translate-x-1/2">
                  <img src="/head.jpg" alt="avatar"
                       class="h-16 w-16 border-[3px] border-solid border-white rounded-full bg-white entered loaded">
                </div>
                <div class="mt-6 text-sm text-center">Liu Yichen</div>
                <div class="mt-[5px] text-sm text-[var(--color-secondary)] text-center">My Blog Site Powered By
                  NuxtContent
                </div>
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
              <div class="social-links-items flex flex-wrap justify-start my-0 -mx-0.5">
                <div class="social-links-item flex p-0 mb-px flex-[0_0_33.33%] max-w-[33.33%]" v-for="i of 9" :key="i">
                  <a href="" class="social-links-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         class="w-5 h-5 social-links-icon dark:text-white">
                      <path d="M14 6H6v8h8V6Z"/>
                      <path fill-rule="evenodd"
                            d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
                            clip-rule="evenodd"/>
                    </svg>
                    <span class="social-links-title">Twitter</span>
                    <span class="social-links-count">71K</span>
                  </a>
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


.widget {
  margin-bottom: 2.5rem;
}

.social-links-link {
  padding: 1rem 0.5rem;
  background-color: var(--color-social-link);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  height: 100%;
  line-height: 1;
  text-align: center;
  border: none;
  transition: background-color 0.2s;
}
.social-links-items .social-links-item .social-links-link {
  margin-right: 1px;
}
.social-links-icon {
  font-size: 1.25rem;
  transition: color .2s;
}

.social-links-title,
.social-links-count {
  font-family: hg-grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 500;
  letter-spacing: -0.025em;
  text-transform: none;
  margin-top: 0.5rem;
}

.social-links-title {
  transition: color .2s;
  white-space: normal;
  font-size: 0.75rem;
  color: var(--color-primary);
}

.social-links-count {
  transition: color .2s;
  font-size: 0.625rem;
  letter-spacing: 0px;
  text-transform: uppercase;
  color: var(--color-secondary);
}
</style>
