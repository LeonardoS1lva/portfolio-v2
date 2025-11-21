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
  <div class="q-py-md row q-gutter-md">
    <q-btn
      v-for="filter in filters"
      :key="filter"
      :label="filter"
      :color="activeFilter === filter ? 'primary-color' : 'grey-6'"
      text-color="third-color"
      outlined
      rounded
      @click="$emit('update:activeFilter', filter)"
    />
  </div>
</template>
