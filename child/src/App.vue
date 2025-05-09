<template>
  <div class="text-xl mx-auto max-w-6xl">
    <div>Name: child-app</div>
    <div>Framework: vue3</div>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>
