<template>
  <div>
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <div class="flex flex-col min-h-screen">
        <Header/>
        <main class="flex-1">
          <NuxtPage />
        </main>
        <Footer/>
      </div>
    </NuxtLayout>

    <ClientOnly>
      <DocDocsSearch :files="files" :navigation="navigation"/>
    </ClientOnly>

    <UNotifications/>
  </div>
</template>
<script setup lang="ts">
import type {ParsedContent} from "@nuxt/content/dist/runtime/types";

const {data: navigation} = await useAsyncData('navigation', () => fetchContentNavigation())
const {data: files} = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})
</script>
