<script setup lang="ts">
defineProps<{
  code: string
  icon?: string
  language?: string
  hideHeader?: boolean
  filename?: string
  highlights?: number[]
  meta?: string
}>()

const config = {
  wrapper: '[&>pre]:!rounded-t-none [&>pre]:!my-0 my-5',
  header: 'flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 border-b-0 relative rounded-t-md px-4 py-3 not-prose',
  icon: {
    base: ''
  },
  button: {
    base: 'absolute top-2.5 right-2.5'
  },
  filename: 'text-gray-700 dark:text-gray-200 text-sm/6'
}

const { ui } = useUI('content.prose.code', undefined, config, undefined, true)
</script>

<template>
  <div class="relative" :class="!!filename && ui.wrapper">
    <div v-if="filename && !hideHeader" :class="ui.header">
      <ProseCodeIcon :icon="icon" :filename="filename" :class="ui.icon.base" />

      <span :class="ui.filename">{{ filename }}</span>
    </div>

    <ProseCodeButton :code="code" :class="ui.button.base" />

    <slot />
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>


<!--
<script lang="ts" setup>
defineProps<{
  code: string
  language?: string
  filename?: string
  meta?: string
}>()
import {useClipboard} from "@vueuse/core";

const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <div class="my-8 overflow-hidden">
    <div class="group relative">
      <span v-if="filename" class="absolute top-2 right-3 text-xs font-mono">
        {{ filename }}
      </span>
      <slot />
      <ClientOnly>
        <button
            v-if="isSupported" class="absolute right-3 bottom-2 p-1 opacity-0 group-hover:opacity-100 transition ease-in"
            @click="copy(code)"
        >
          <span class="sr-only">
            Copy to clipboard
          </span>
          <Transition
              appear
              mode="out-in"
              enter-active-class="duration-150 ease-int"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="duration-150 ease-out"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
          >
            <div v-if="copied" class="i-heroicons-check-solid w-4 h-4" />
            <div v-else class="i-heroicons-clipboard-solid w-4 h-4" />
          </transition>
        </button>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
:deep(pre code .line) {
  display: block;
  min-height: 1rem;
}
</style>
-->
