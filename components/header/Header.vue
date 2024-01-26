<script setup lang="ts">

</script>

<template>
  <header class="bg-[var(--color-nav-bg)]">
    <div class="head-img-wrap">
      <div class="head-bg h-[200px] max-w-[920px] aspect-[23/5] overflow-hidden">
        <img src="/bg-3.png" alt="bg3"
        class="object-cover object-top w-full h-full"
        width="920" height="200">
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
      </ul>
      <div class="nav-btn">

      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>
