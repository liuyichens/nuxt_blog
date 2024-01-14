<script setup lang="ts">
const props = defineProps<{
  href?: string,
  noIcon?: boolean
}>()

const isExternal = computed(() => props.href && /^[a-z]+:/i.test(props.href))

</script>

<template>
  <NuxtLink v-if="href" :to="href"
            :target="isExternal?'_blank':undefined"
            :rel="isExternal?'noopener noreferrer':undefined"
            active-class="text-primary">
    <slot/>
    <IconsIconExternalLink v-if="isExternal && !noIcon"
                           class="inline-block -mt-0.5 ml-1 w-[11px] h-[11px] fill-gray-400"/>
  </NuxtLink>
  <span
      v-else
      class=""
      :class="{link: href}">
    <slot/>
  </span>
</template>

<style scoped>

</style>
