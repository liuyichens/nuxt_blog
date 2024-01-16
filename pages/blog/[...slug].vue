<script setup lang="ts">
import {joinURL} from "ufo";

const route = useRoute()
const {data: post} = await useAsyncData(route.path, () => queryContent(route.path).findOne())

if (!post.value) {
  throw createError({statusCode: 404, statusMessage: 'Post not found', fatal: true})
}

const title = post.value.head?.title || post.value.title

const description = post.value.head?.description || post.value.description
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

if (post.value.image?.src) {
  const site = useSiteConfig()

  useSeoMeta({
    ogImage: joinURL(site.url, post.value.image.src),
    twitterImage: joinURL(site.url, post.value.image.src)
  })

} else {
  defineOgImage({
    component: 'Sass',
    title,
    description,
    headline: 'Blog'
  })
}

</script>

<template>
  <div class="container mx-auto px-5" v-if="post">
    <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
      <div class="lg:col-span-8">
        <div class="mt-8 pb-24 prose prose-primary dark:prose-invert max-w-none">
          <ContentRenderer v-if="post && post.body" :value="post"/>
        </div>
      </div>
      <div class="lg:col-span-2 order-first lg:order-last">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
