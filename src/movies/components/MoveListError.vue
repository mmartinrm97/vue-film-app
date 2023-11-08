<template>
  <div v-if="error" class="col-span-full text-center text-red-700 dark:text-red-300 text-xl my-4">
    <div>
      <span> Error: {{ error }}. </span>
    </div>
  </div>
</template>
