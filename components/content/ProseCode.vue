<script setup lang="ts">
defineProps<{
  code: string,
  filename?: string
}>()
</script>

<template>
<div class="code-block relative [&>pre]:!rounded-t-none [&>pre]:!my-0 my-5">
<!--  <div class="code-block-head">-->
<!--    FileName-->
<!--  </div>-->
<!--  <div>Copy Button</div>-->
  <slot/>
</div>
</template>

<style scoped>

</style>
