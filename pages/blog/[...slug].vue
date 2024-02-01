<script setup lang="ts">
// import {joinURL} from "ufo";

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

/*if (post.value.image?.src) {
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
}*/
</script>

<template>
<main class="main-content">
  <div class="prose prose-primary dark:prose-invert max-w-none prose-wrap">
    <ContentRenderer v-if="post && post.body" :value="post" class="prose-content"/>
  </div>
</main>
</template>

<style scoped>

</style>
