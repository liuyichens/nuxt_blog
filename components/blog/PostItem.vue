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
  <article class="relative grid grid-cols-3 p-4 w-full gap-y-6 gap-x-5 items-center">
    <div class="group overflow-hidden">
      <div class="entry-thumbnail relative">
        <div class="overlay relative flex flex-row justify-start w-full">
          <div
              class="ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none">
            <img :src="`https://picsum.photos/640/360?index=${index}&t=${new Date().getTime()}`" alt="cover"
                 class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"/>
          </div>
          <div class="flex flex-col justify-end absolute left-0 top-0 right-0 bottom-0 p-5 w-full rounded-lg overlay-content">
            <span class="read-more">Read more</span>
          </div>
          <a :href="path" class="absolute block top-0 right-0 bottom-0 left-0"></a>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-start flex-1 col-span-2">
      <div class="flex-1">
        <div
            class="meta-category flex flex-wrap items-center mb-3 text-[10px] font-medium tracking-normal uppercase">
          <a :href="path" class="category-title flex items-center ml-0">
            <span class="char" style="background-color: rgb(228, 178, 142);">E</span>
            <span class="label">Etiam</span>
          </a>
        </div>
        <div class="entry-header">
          <h2 class="entry-title lg:text-xl m-0 font-medium tracking-tight leading-tight lg:leading-tight line-clamp-2">
            <a :href="path">{{ title }}</a>
          </h2>
          <ul class="post-meta mt-1">
            <li class="meta-tag">
              <span>
                <a href="">感悟</a>
              </span>
            </li>
          </ul>
        </div>
        <div class="entry-details mt-1">
          <div class="entry-excerpt text-xs sm:text-sm line-clamp-1 sm:line-clamp-2">
            {{ description }}
          </div>
        </div>
      </div>
      <div class="relative flex items-center gap-x-3 mt-2">
        <time v-if="date" :datetime="getDateTime()" class="text-gray-500 text-xs sm:text-sm">
          {{ new Date(date).toLocaleDateString('zh', {year: 'numeric', month: 'long', day: 'numeric'}) }}
        </time>
      </div>
    </div>
  </article>
</template>

<style scoped>

.meta-category a:before {
  order: 2;
  color: var(--color-secondary);
  padding: 0 0.5rem;
  content: '—';
}

.read-more {
  font-family: hg-grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  opacity: 0;
  transition: .2s ease all;
  color: #fff;
}

.overlay-content{
  transition: .2s ease all;
}

.overlay:hover .overlay-content{
  background-color: rgba(10, 10, 10, .3);
}
.overlay:hover .read-more {
  opacity: 1;
}
</style>
