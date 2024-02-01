<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
const props = defineProps<{
  index: number,
  path: string,
  title: string,
  description?: string,
  date?: string | Date
}>()

function getDateTime() {
  if (props.date) {
    return new Date(props.date).toISOString()
  }
  return undefined
}

</script>

<template>
  <article class="archive-item">
    <div class="entry-thumbnail">
      <div class="thumbnail">
        <div class="overlay">
          <div class="overlay-background">
            <img :src="`https://picsum.photos/640/360?index=${index}&t=${new Date().getTime()}`" alt=""
                 class="object-cover object-center w-full h-full">
          </div>
          <div class="overlay-content">

          </div>
        </div>
      </div>
    </div>
    <div class="post-info">
      <div>
        <h3 class="post-title">
          <NuxtLink :to="path" :aria-label="title">{{ title }}</NuxtLink>
        </h3>
        <p class="post-description">{{ description }}</p>
      </div>
      <div class="post-meta">
        <time v-if="date" :datetime="getDateTime" class="post-meta-time">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          {{ new Date(date).toLocaleDateString('zh', {year: 'numeric', month: 'long', day: 'numeric'}) }}
        </time>
      </div>
    </div>
  </article>
</template>

<style scoped>

</style>
