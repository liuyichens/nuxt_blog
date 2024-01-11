<template>
  <header
      class="relative sticky top-0 z-50 bg-white border-b border-slate-900/10 dark:border-slate-300/10 dark:bg-gray-900 dark:text-gray-400">
    <div class="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-white">
        <div class="img-container h-[40px] w-[74px] overflow-hidden">
          <img src="~/assets/img/logo.svg" alt="logo" class="object-fill logo-img" width="100%" height="100%"/>
        </div>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <nav
          class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 dark:md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="/" class="mr-5 hover:text-gray-900 dark:hover:text-white">First Link</a>
        <a href="/" class="mr-5 hover:text-gray-900 dark:hover:text-white">Second Link</a>
        <a href="/" class="mr-5 hover:text-gray-900 dark:hover:text-white">Third Link</a>
        <a href="/" class="mr-5 hover:text-gray-900 dark:hover:text-white">Fourth Link</a>
      </nav>
      <ThemeSwitch/>
    </div>
  </header>
</template>

<script setup>
</script>


<style scoped>
.dark .logo-img {
  filter: drop-shadow(2px 2px 6px #009a61);
}
</style>
