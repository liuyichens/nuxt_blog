<template>
  <div>
    <NuxtLayout>
      <div class="main-layout">
        <Header/>
        <NuxtPage/>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import Header from "~/components/header/Header.vue";
</script>
