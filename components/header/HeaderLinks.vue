<script setup lang="ts">
import type {Link} from "~/types";
import {omit} from "~/lib/lodash";
import HeaderPopoverLinks from "~/components/header/HeaderPopoverLinks.vue";
import HeaderLink from "~/components/header/HeaderLink.vue";

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  links?: Link[],
  ui?: Partial<typeof config.value>
  class?: any
}>()

const appConfig = useAppConfig()

const config = computed(() => ({
  wrapper: 'flex items-center gap-x-5',
  base: 'text-sm/6 font-medium flex items-center gap-1',
  active: 'text-primary',
  inactive: 'hover:text-primary',
  trailingIcon: {
    name: appConfig.ui.icons.chevron,
    base: 'w-5 h-5 transform transition-transform duration-200 flex-shrink-0',
    active: 'rotate-180',
    inactive: ''
  },
  externalIcon: {
    name: appConfig.ui.icons.external,
    base: 'w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
  },
  popover: {
    mode: 'hover' as const,
    openDelay: 0,
    ui: {
      width: 'max-w-[16rem]'
    }
  }
}))

const {ui, attrs} = useUI('header.links', toRef(props, 'ui'), config, toRef(props, 'class'), true)

</script>

<template>
  <!--  <nav class="md:ml-4 md:pl-4 md:border-l md:border-gray-400 dark:md:border-gray-700">-->
  <nav class="flex items-center justify-between pl-5" v-if="links?.length">
    <template v-for="(link, index) of links" :key="index">
<!--      <HeaderLinkGroup v-if="link.children?.length" :link="link">
      </HeaderLinkGroup>-->
      <HeaderLink :link="link"/>
    </template>
  </nav>
</template>

<style scoped>

</style>
