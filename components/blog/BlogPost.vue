<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
const props = withDefaults(defineProps<{
  index: number,
  path: string,
  title?: string,
  description?: string,
  date?: string | Date,
  image?: string,
  tags?: ({
    color?: string | undefined,
    name?: string
  })[],
}>(), {
  title: undefined,
  description: undefined,
  date: undefined,
  image: undefined,
  tags: undefined,
})

function getDateTime() {
  return new Date(props.date).toISOString()
}

</script>

<template>
  <div class="p-3.5 flex flex-nowrap gap-5" data-aos="fade-up"
       data-aos-duration="200" data-aos-once="false" data-aos-anchor-placement="top-bottom">
    <div class="left">
      <NuxtLink :to="path" class="absolute top-0 left-0 w-full h-full rounded overflow-hidden">
        <NuxtImg class="object-cover w-full h-full max-w-full transform transition-transform duration-200 group-hover:scale-105"
             width="480" height="300"
             :src="`https://picsum.photos/640/360?index=${index}&t=${new Date().getTime()}`"
             :alt="title" loading="lazy"/>
      </NuxtLink>
    </div>
    <div class="right">
      <h2 class="text-base sm:text-2xl font-medium text-gray-900 title-font mb-2 dark:text-white hover:text-primary transition-colors duration-200" v-if="title">
        <NuxtLink :to="path" class="line-clamp-1">{{ title }}</NuxtLink>
      </h2>
      <p class="text-xs sm:text-base leading-tight line-clamp-2" v-if="description">{{ description }}</p>
      <div class="mt-4 flex justify-between items-center">
        <time v-if="date" :datetime="getDateTime()" class="text-gray-500 text-xs sm:text-sm">
          {{ new Date(date).toLocaleDateString('zh', {year: 'numeric', month: 'long', day: 'numeric'}) }}
        </time>
        <!--        <span class="text-gray-500 text-xs sm:text-sm">{{ new Date(date).toLocaleDateString('zh-CN', {year: 'numeric', month: 'short', day: 'numeric'}) }}</span>-->
        <div class="px-2 flex flex-nowrap items-center gap-2 text-sm">
          <Badge v-for="(tag, tagIndex) in tags" :key="tag + ',' + tagIndex" :color="tag.color">
            {{ tag.name }}
          </Badge>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left {
  @apply relative flex-1 before:content-[''] before:block before:pt-[60%]
}

.right {
  flex: 2.5;
  @apply flex flex-col justify-between w-0 flex-shrink-0;
}
</style>
