<script setup>
useSeoMeta({
  title: 'Page Not Found',
  description: 'We are sorry but this page could not found'
})

defineProps(['error'])

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

const {data: navigation} = await useAsyncData('navigation', () => fetchContentNavigation(), {default: () => []})
const {data: files} = useLazyFetch('/api/search.json', {default: () => [], server: false})

</script>

<template>
<div>

</div>
</template>

<style scoped>

</style>
