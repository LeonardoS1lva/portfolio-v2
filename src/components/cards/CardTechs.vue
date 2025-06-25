<script setup>
defineProps({
  nameIcon: {
    type: String,
    default: 'code',
  },
  colorIcon: {
    type: String,
    default: 'black',
  },
  name: {
    type: String,
    default: 'Tecnologia',
  },
})
</script>

<template>
  <q-card
    style="width: 150px; height: 150px; border-radius: 32px"
    bordered
    :style="{ border: `4px solid ${colorIcon}`, boxShadow: `4px 4px 0 ${colorIcon}` }"
    class="bg-background-card"
  >
    <q-card-section class="text-center q-mt-md">
      <q-icon :name="nameIcon" size="75px" :style="{ color: colorIcon }">
        <q-tooltip :style="{ backgroundColor: colorIcon }" class="text-white">
          {{ name }}
        </q-tooltip>
      </q-icon>
    </q-card-section>
  </q-card>
</template>
