<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <div class="main-layout">
        <Header/>
        <NuxtPage/>
        <Footer/>
      </div>
    </NuxtLayout>
    <UNotifications />
  </div>
</template>
<script setup lang="ts">
import Header from "~/components/header/Header.vue";
</script>
