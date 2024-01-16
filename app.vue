<template>
  <div>
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <Header/>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  meta: [
    {charset: 'utf-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'}
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
