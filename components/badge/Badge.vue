<template>
  <span :class="['inline-flex items-center px-2 py-1 text-xs font-medium ring-1 ring-inset', finalStyle]">
    <slot />
  </span>
</template>
<script setup lang="ts">
const props = defineProps<{
  color: string
}>()
const finalStyle = computed(() => {
  let style = ''
  if (['yellow', 'orange', 'brown'].includes(props.color)) {
    style = 'bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-500/10 dark:text-yellow-500 dark:ring-yellow-500/20';
  } else if (['blue'].includes(props.color)) {
    style = 'bg-blue-50 text-blue-700 ring-blue-700/10 dark:text-blue-400 dark:ring-blue-400/10 dark:bg-blue-400/20';
  } else if (['red'].includes(props.color)) {
    style = 'bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20';
  } else if (['pink'].includes(props.color)) {
    style = 'bg-pink-50 text-pink-700 ring-pink-700/10 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20';
  } else if (['indigo'].includes(props.color)) {
    style = 'bg-indigo-50 text-indigo-700 ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/20';
  } else if (['purple'].includes(props.color)) {
    style = 'bg-purple-50 text-purple-700 ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/20';
  } else if (['green'].includes(props.color)) {
    style = 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/20';
  } else {
    style = 'bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20';
  }
  return style;
})

</script>
<style scoped></style>
