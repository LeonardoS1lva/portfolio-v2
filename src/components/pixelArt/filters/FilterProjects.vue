<script setup>
defineProps({
  filters: {
    type: Array,
    required: true,
  },
  activeFilter: {
    type: String,
    required: true,
  },
})

defineEmits(['update:activeFilter'])
</script>

<template>
  <div class="q-py-md">
    <button
      v-for="filter in filters"
      :key="filter"
      type="button"
      class="nes-btn"
      :class="{ 'is-primary': activeFilter === filter }"
      @click="$emit('update:activeFilter', filter)"
    >
      {{ filter }}
    </button>
  </div>
</template>

<style scoped>
@import '/node_modules/nes.css/css/nes.css';
</style>
