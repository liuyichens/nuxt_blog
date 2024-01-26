<script setup lang="ts">
defineProps<{
  index: number,
  title: string,
  description?:string
}>()
</script>

<template>
  <article class="archive-item">
    <div class="">
      <div>
        <div>
          <div class="max-w-[185px] aspect-[16/9] w-full pointer-events-none">
            <img :src="`https://picsum.photos/640/360?index=${index}&t=${new Date().getTime()}`" alt=""
                 class="object-cover object-center w-full h-full">
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-start flex-1 col-span-3">
      <h1>{{title}}</h1>
      <p>{{ description}}</p>
    </div>
  </article>
</template>

<style scoped>

</style>
