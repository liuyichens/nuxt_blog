<script setup lang="ts">
import type {Link} from '~/types'
import FlyoutMenu from "~/components/menu/FlyoutMenu.vue";

defineProps<{
  link: Link
}>()
</script>

<template>
  <FlyoutMenu :links="link.children" :label="link.label">
    <template #btn-slot>
      <HeaderLink :link="link"/>
    </template>
  </FlyoutMenu>
</template>

<style scoped>

</style>
