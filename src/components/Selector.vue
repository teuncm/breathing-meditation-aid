<script setup>
const model = defineModel()

import { defineProps } from 'vue';

const props = defineProps({
  min: {
    type: Number,
    required: true
  },
  max: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
});
</script>

<template>
  <input v-model.number="model" value="1" type="number" min="1" max="5" step="1" />
</template>