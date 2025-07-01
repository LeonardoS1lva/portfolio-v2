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
    default: 'Technology',
  },
  hasExternIcon: {
    type: Boolean,
    default: false,
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
    <q-card-section class="text-center q-mt-md" v-if="!hasExternIcon">
      <q-icon :name="nameIcon" size="75px" :style="{ color: colorIcon }">
        <q-tooltip :style="{ backgroundColor: colorIcon }" class="text-white">
          {{ name }}
        </q-tooltip>
      </q-icon>
    </q-card-section>

    <q-card-section class="text-center" v-else>
      <q-img :src="nameIcon" ratio="1" fit="contain">
        <q-tooltip :style="{ backgroundColor: colorIcon }" class="text-white">
          {{ name }}
        </q-tooltip>
      </q-img>
    </q-card-section>
  </q-card>
</template>
