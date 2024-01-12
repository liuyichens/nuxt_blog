<script setup>
// const {data: page} = await useAsyncData('blog', () => queryContent('/blog').findOne())
// debugger
// if (!page.value) {
//   throw new createError({statusCode: 404, statusMessage: 'Page not found', fatal: true})
// }

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
  <div class="container mx-auto flex flex-row gap-5 my-8 px-2.5 xl:px-0">
    <section class="flex-1 w-[70%] overflow-hidden dark:text-gray-400">
      <div class="container mx-auto">
        <div class="divide-y-2 divide-gray-100 dark:divide-gray-800">
          <BlogPost v-for="(post, index) in posts" :key="index"
                    :path="post._path"
                    :title="post.title"
                    :description="post.description"
                    :image="post.cover"
                    :date="new Date(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})"/>
        </div>
      </div>
    </section>
    <aside class="max-w-[300px] w-full hidden lg:block">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </aside>
  </div>
</template>

<style scoped>

</style>
