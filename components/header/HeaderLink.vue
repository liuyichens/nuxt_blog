<script setup lang="ts">
import type {Link as ItemLink} from '~/types'
import MenuLink from "~/components/menu/MenuLink.vue";

defineProps<{
  link: ItemLink
}>()

</script>

<template>
  <MenuLink
      class="menu-link"
      :href="link.to"
      :noIcon="false">
    {{ link.label }}
  </MenuLink>
</template>

<style scoped>
.menu-link{
  @apply block px-3 text-sm font-medium hover:text-primary whitespace-nowrap;
  line-height: var(--header-height);
  transition: color .25s;
}
.menu-link.router-link-exact-active {
  @apply border-b border-solid;
  border-color: rgb(var(--color-primary-DEFAULT));
}
</style>
