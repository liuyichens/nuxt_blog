<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div
      class="author-panel relative overflow-hidden text-center pb-5 aside-style"
  >
    <div class="author-back-image">
      <img class="max-w-full w-full h-auto max-h-[110px]" src="/author_background_image.webp" alt="">
    </div>
    <div class="auth-avatar text-center absolute top-16 left-[calc(50%-32px)]">
      <img
          src="/head.jpg" alt=""
          class="h-16 w-16 border-[3px] border-solid border-white rounded-full bg-white"
      >
    </div>
    <div class="mt-6 text-sm">
      {{ appConfig.author }}
    </div>
    <div class="mt-[5px] text-sm text-[#666]">
      <div class="px-7">
        {{ appConfig.description }}
      </div>
    </div>
<!--    <div v-if="theme.socialLinks" class="social-links">-->
<!--      <VPSocialLinks :links="theme.socialLinks" />-->
<!--    </div>-->
  </div>
</template>

<style scoped>

</style>
