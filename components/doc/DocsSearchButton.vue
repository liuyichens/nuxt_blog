<script setup lang="ts">
import {useUIState} from "~/composables/useUIState";

const appConfig = useAppConfig()
const {metaSymbol} = useShortcuts()
const {toggleDocsSearch} = useUIState()
</script>

<template>
  <UButton
      :icon="appConfig.ui.icons.search"
      :label="null"
      v-bind="$ui?.button?.secondary"
      aria-label="Search"
      @click="toggleDocsSearch">
    <template #trailing>
      <div class="hidden lg:flex items-center gap-0.5 ml-auto -my-1 flex-shrink-0">
        <UKbd>
          {{ metaSymbol }}
        </UKbd>
        <UKbd>
          K
        </UKbd>
      </div>
    </template>
  </UButton>
</template>

<style scoped>

</style>
