<script setup>
import TheFooter from 'src/components/TheFooter.vue'
import TheHeader from 'src/components/TheHeader.vue'
</script>

<template>
  <q-layout view="lHh Lpr lff">
    <TheHeader :show-links="false" />

    <q-page-container>
      <router-view />
    </q-page-container>

    <TheFooter :show-contact="false" />
  </q-layout>
</template>
