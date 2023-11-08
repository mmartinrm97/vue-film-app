<template>
  <div class="col-span-full my-4 text-center text-xl text-red-700 dark:text-red-300">
    <div>
      <span> Error: {{ props.error }}. </span>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  error: Error | null
}

const props = defineProps<Props>()
</script>
