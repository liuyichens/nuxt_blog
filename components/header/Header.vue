<template>
  <header
      class="sticky top-0 z-50 bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px">
    <div class="container mx-auto px-5 flex items-center justify-between gap-3 h-[--header-height]">
      <div class="left flex items-center lg:flex-1 gap-1.5">
        <NuxtLink to="/" aria-label="Logo"
                  class="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5
h-10 w-[74px] overflow-hidden">
          <NuxtImg src="/logo.svg" class="object-fill logo-img" width="100%" height="100%"/>
        </NuxtLink>
        <HeaderLinks :links="links"/>
      </div>

      <div>
        <DocsSearchButton/>
        <ThemeSwitch/>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type {NavItem} from "@nuxt/content/dist/runtime/types";
import DocsSearchButton from "~/components/doc/DocsSearchButton.vue";

const navigation = inject<NavItem[]>('navigation', [])

const links = [{
  label: '首页',
  to: '/'
}, {
  label: '文章',
  to: '/blog'
},{
  label: '收藏',
  to: '/favor'
}, {
  label: '关于',
  to: '/about'
}, {
  label: '知识库',
  to: 'https://liuyichens.github.io/'
}, {
  label: '语雀',
  to: 'https://www.yuque.com/dashboard'
}, {
  label: '掘金',
  to: 'https://juejin.cn/'
}]

const config = {
  button: {
    base: 'lg:hidden',
    icon: {
      open: 'i-heroicons-bars-3',
      close: 'i-heroicons-x-mark-20-solid'
    }
  }
}

</script>


<style scoped>
.dark .logo-img {
  filter: drop-shadow(2px 2px 6px #009a61);
}
</style>
