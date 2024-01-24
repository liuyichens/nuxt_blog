<template>
  <div>
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <div class="flex flex-col flex-nowrap min-h-screen">
        <Header/>
        <main class="flex-1">
          <NuxtPage/>
        </main>
        <Footer/>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const {$aos} = useNuxtApp()

onMounted(() => {
  $aos().init({
    easing: 'ease-out-back',
    duration: 1000
  })
})
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


<style>
.page-enter-active,
.page-leave-active {
  transition: all 200ms;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
