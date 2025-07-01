<script setup>
import TheFooter from 'src/components/default/TheFooter.vue'
import TheHeader from 'src/components/default/TheHeader.vue'
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
