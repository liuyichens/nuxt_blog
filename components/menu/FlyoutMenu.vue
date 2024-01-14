<script setup lang="ts">
import type {Link} from '~/types'
import {ref} from 'vue'

const props = defineProps<{
  links: Link[],
  label?: string
}>()

const open = ref(false)
const elRef = ref<HTMLElement>()

</script>

<template>
  <div class=""
       ref="elRef"
       @mouseenter="open = true"
       @mouseleave="open = false">
    <button
        type="button"
        class=""
        aria-haspopup="true"
        :aria-expanded="open"
        :aria-label="label"
        @click="open = !open">
      <slot name="btn-slot">

      </slot>
    </button>
    <div>

    </div>
  </div>
</template>

<style scoped>

</style>
