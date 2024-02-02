<script setup lang="ts">
useSeoMeta({
  title: '收藏'
})
const {data: favor} = await useAsyncData('Favor', () => queryContent('/favor').findOne())

const favorWebSites = favor.value?.websites || []

</script>

<template>
  <main class="main-content">
    <section class="text-gray-600 body-font dark:text-gray-400">
      <div class="mx-auto">
        <div class="flex flex-wrap">
          <div class="p-2 lg:w-1/4 md:w-1/2 w-full overflow-hidden" v-for="(site, index) of favorWebSites" :key="index"
               data-aos="fade-up" data-aos-duration="600"
               :data-aos-delay="(index + 1) * 50">
            <NuxtLink :to="site.link" target="_blank">
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg dark:border-gray-800 overflow-hidden">
                <img alt="logo" class="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                     :src="site.logo">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium dark:text-white line-clamp-1" :title="site.title">
                    {{ site.title }}</h2>
                  <p class="text-gray-500 dark:text-gray-600 line-clamp-1" :title="site.desc">{{ site.desc }}</p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
