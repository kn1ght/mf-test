<template>
  <div class="text-xl mx-auto max-w-6xl">
    <div style="font-weight: bold">Name: child_vue_rspack_app</div>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>
