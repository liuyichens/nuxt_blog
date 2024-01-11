<template>
  <ClientOnly>
    <UButton
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        color="gray"
        variant="ghost"
        aria-label="Theme"
        @click="toggleAppearance"
    />

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const toggleAppearance = inject('toggle-appearance', () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
})

</script>
