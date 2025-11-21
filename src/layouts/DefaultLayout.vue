<script setup>
import TheFooter from 'src/components/default/TheFooter.vue'
import TheHeader from 'src/components/default/TheHeader.vue'

import TheHeaderPixel from 'src/components/pixelArt/TheHeaderPixel.vue'
import TheFooterPixel from 'src/components/pixelArt/TheFooterPixel.vue'

import { useThemeStore } from 'src/stores/themeStore'

const useTheme = useThemeStore()
</script>

<template>
  <q-layout view="lHh Lpr lff">
    <TheHeaderPixel v-if="useTheme.theme === 'pixel-art'" :show-links="false" />
    <TheHeader v-else :show-links="false" />

    <q-page-container>
      <router-view />
    </q-page-container>

    <TheFooterPixel v-if="useTheme.theme === 'pixel-art'" :show-contact="false" />
    <TheFooter v-else :show-contact="false" />
  </q-layout>
</template>
