<script setup lang="ts">

</script>

<template>
  <header class="bg-[var(--color-nav-bg)]">
    <div class="head-img-wrap">
      <div class="head-bg max-w-[920px] aspect-[23/5] overflow-hidden">
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
        <li class="nav-item">
          <NuxtLink to="https://www.yuque.com/dashboard" rel="noopener noreferrer" target="_blank
">
            语雀
            <svg aria-hidden="true" height="7" viewBox="0 0 6 6" width="7" class="absolute top-2 -right-0.5">
              <path d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z" fill="var(--color-text-desc)"></path>
            </svg>
          </NuxtLink>
        </li>
      </ul>
      <div class="nav-btn">

      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>
