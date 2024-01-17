<script setup lang="ts">

</script>

<template>
  <header
      class="sticky top-0 z-50 backdrop-blur bg-white/95 supports-backdrop-blur border-b border-[var(--color-nav-border)] dark:bg-transparent">
    <div class="container mx-auto flex items-center justify-between px-4 h-[var(--header-height)]">
      <div class="flex md:flex-1 h-full items-center">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="/logo.svg" alt="">
        </a>
        <nav class="hidden md:flex flex-1 h-full md:ml-8">
          <ul class="flex-1 flex flex-nowrap h-full nav-items">
            <li class="relative h-full">
              <NuxtLink to="/"
                        class="flex flex-nowrap justify-between items-center h-full whitespace-nowrap nav-item-link">
                <span>首页</span>
              </NuxtLink>
            </li>
            <li class="relative h-full">
              <NuxtLink to="/favor"
                        class="flex flex-nowrap justify-between items-center h-full whitespace-nowrap nav-item-link">
                <span>收藏</span>
              </NuxtLink>
            </li>
            <li class="relative h-full">
              <NuxtLink to="/about"
                        class="flex flex-nowrap justify-between items-center h-full whitespace-nowrap nav-item-link">
                <span>关于</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="hidden md:flex md:justify-end">
          <button type="button"
                  class="flex h-8 w-8 items-center justify-center rounded-lg dark:text-white hover:text-[var(--color-secondary)] transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
          <button type="button"
                  class="flex h-8 w-8 items-center justify-center rounded-lg dark:text-white hover:text-[var(--color-secondary)] transition  duration-200"
                  @click="toggleDark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 class="w-5 h-5 hidden dark:inline-block">
              <path
                  d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke-width="1.5" fill="currentColor" class="w-5 h-5 dark:hidden">
              <path fill-rule="evenodd"
                    d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-item-link {
  font-family: 'aktiv-grotesk', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0px;
  text-transform: none;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: var(--color-primary);
}

.nav-item-link span {
  position: relative;
}

.nav-item-link span:after {
  content: "";
  position: absolute;
  left: 0;
  top: 120%;
  width: 100%;
  height: 1px;
  transform: translateY(1px);
  opacity: 0;
  transition: all 0.15s cubic-bezier(0.39, 0.575, 0.565, 1);
  transition-property: opacity, transform;
  background-color: var(--color-primary);
  pointer-events: none;
}

.nav-items > li:hover .nav-item-link span:after,
.nav-items > li .nav-item-link.router-link-active span:after {
  opacity: 1;
  transform: translateY(-1px) translateZ(0);
}

.nav-items > li:first-child .nav-item-link {
  padding-left: 0;
}
</style>
