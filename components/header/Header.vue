<script setup lang="ts">
import SearchModal from "~/components/header/SearchModal.vue";

const {metaSymbol} = useShortcuts()

const uiButton = { font: 'font-semibold', color: { gray: { ghost: 'text-gray-950 hover:bg-transparent dark:text-gray-50 dark:hover:bg-transparent' } } }

const colorMode = useColorMode()
const toggleTheme = function () {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const openSearch = ref(false)

</script>

<template>
  <header class="bg-[var(--color-nav-bg)]">
    <div class="head-img-wrap">
      <div class="head-bg max-w-[920px] aspect-[23/5] overflow-hidden">
        <img src="/bg-1.png" alt="bg1"
             class="object-cover object-top w-full h-full slide">
        <img src="/bg-2.png" alt="bg2"
             class="object-cover object-top w-full h-full slide">
        <img src="/bg-3.png" alt="bg3"
             class="object-cover object-top w-full h-full slide">
      </div>
    </div>
    <nav class="head-nav">
      <ul class="nav-items">
        <li class="nav-item">
          <NuxtLink to="/" class="link-active">首页</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/post">文章</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/about">关于</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="https://www.yuque.com/dashboard" target="_blank">
            语雀
            <span class="i-heroicons-arrow-up-right-20-solid w-3 h-3"/>
          </NuxtLink>
        </li>
      </ul>
      <div class="nav-btn">
        <UTooltip text="Open Search" :shortcuts="[metaSymbol, 'K']">
          <UButton size="md" icon="i-heroicons-magnifying-glass" color="gray" variant="ghost"
                   :ui="{ size: { md: 'text-base' }, ...uiButton }" aria-label="Open Search" square
                   @click="openSearch = true"/>
        </UTooltip>
        <ClientOnly>
          <UButton size="xl" variant="ghost" color="gray" square
                   :trailing-icon="$colorMode.value === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'" :ui="uiButton"
                   aria-label="Toggle Theme" @click="toggleTheme">
          </UButton>
        </ClientOnly>
      </div>
    </nav>
  </header>
  <SearchModal v-model:open="openSearch" />
</template>

<style scoped>

</style>
