<template>
  <div>
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <div class="flex flex-col min-h-screen">
        <Header/>
        <main class="flex-1">
          <NuxtPage />
        </main>
        <Footer/>
      </div>
    </NuxtLayout>
    <UNotifications/>
  </div>
</template>
<script setup>
import LazyLoad from "vanilla-lazyload";
import {onBeforeUnmount, onMounted} from "vue";

// const lazyLoadInstance = new LazyLoad({
//   // css属性选择器
//   elements_selector: 'img',
//   // 滚动多少加载
//   threshold: 0,
//   // 加载的元素URL的属性
//   data_src: 'lazy-src',
// })
//
// onMounted(() => {
//   lazyLoadInstance.update()
// })
//
// onBeforeUnmount(() => {
//   lazyLoadInstance.destroy()
// })

</script>
