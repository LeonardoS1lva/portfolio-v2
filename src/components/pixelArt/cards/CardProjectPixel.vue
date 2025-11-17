<script setup>
import imgPlaceholder from 'src/assets/projects/PlaceholderImg.png'

defineProps({
  imgProject: {
    type: String,
    default: imgPlaceholder,
  },
  projectName: {
    type: String,
    default: 'Placeholder Project',
  },
  projectDescription: {
    type: String,
    default: 'Placeholder project description.',
  },
  projectLink: {
    type: String,
    default: '#',
  },
  labelButton: {
    type: String,
    default: 'View Project',
  },
})
</script>

<template>
  <q-card
    style="width: 400px; border-radius: 12px"
    class="bg-background-card full-height row column"
  >
    <q-card-section class="q-pa-none">
      <q-img :src="imgProject" style="border-radius: 12px 12px 0 0" height="230px" fit="cover" />
    </q-card-section>

    <q-card-section class="">
      <div class="text-h6 text-secondary-color text-bold">{{ projectName }}</div>
      <div class="text-subtitle2 text-secondary-color-light">{{ projectDescription }}</div>
    </q-card-section>

    <q-space />

    <q-card-actions class="q-px-md">
      <q-btn
        no-caps
        :label="labelButton"
        icon-right="arrow_forward"
        class="full-width nes-btn is-primary"
        :href="projectLink"
        target="_blank"
        :rel="projectLink.startsWith('http') ? 'noopener noreferrer' : ''"
      />
    </q-card-actions>
  </q-card>
</template>

<style scoped>
@import '/node_modules/nes.css/css/nes.css';
</style>
