<template>
  <div>
    <div style="font-weight: bold">child_vue_rspack_app</div>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>
