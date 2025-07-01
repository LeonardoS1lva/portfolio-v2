<script setup>
import TheHeader from 'src/components/default/TheHeader.vue'
import TheFooter from 'src/components/default/TheFooter.vue'

import TheHeaderPixel from 'src/components/pixelArt/TheHeaderPixel.vue'
import TheFooterPixel from 'src/components/pixelArt/TheFooterPixel.vue'

import { useThemeStore } from 'src/stores/themeStore'

const useTheme = useThemeStore()
</script>

<template>
  <q-layout view="lHh Lpr lff">
    <TheHeader v-if="useTheme.theme !== 'pixel-art'" />
    <TheHeaderPixel v-else />

    <q-page-container>
      <router-view />
    </q-page-container>

    <TheFooter v-if="useTheme.theme !== 'pixel-art'" />
    <TheFooterPixel v-else />
  </q-layout>
</template>
