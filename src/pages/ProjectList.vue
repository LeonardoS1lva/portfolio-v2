<script setup>
import PixelButton2 from 'src/components/buttons/PixelButton2.vue'
</script>

<template>
  <q-page class="flex flex-center">
    <!-- <q-card class="text-center bg-background-card" flat style="max-width: 450px; width: 100%">
      <h1 class="text-h3 text-secondary-color">Lista de Projetos</h1>
      <h2 class="text-h6 q-pt-md text-secondary-color-light">
        Aqui estão alguns dos meus projetos mais recentes.
      </h2>
      <q-btn
        color="primary-color"
        text-color="third-color"
        label="Voltar para o Início"
        to="/"
        class="q-mt-md"
      />
    </q-card> -->
    <PixelButton2 />
  </q-page>
</template>

<style scoped>
/* .pixel-border {
  border-width: 32px;
  border-style: solid;
  border-image: url('/src/assets/icons/pixel-art/border_square_pxArt.png') 4 stretch;
  image-rendering: pixelated;
  background: transparent;
} */
</style>
