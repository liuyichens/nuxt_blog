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
    <UNotifications/>
  </div>
</template>
<script setup lang="ts">
</script>
