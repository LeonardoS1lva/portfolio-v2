<script setup>
import CardProject from 'src/components/cards/CardProject.vue'
</script>

<template>
  <div class="row">
    <q-card class="col-12 bg-background-card" flat>
      <q-card-section class="q-pa-md">
        <h3 class="text-secondary-color text-bold text-h4 text-center">Meus Projetos</h3>
      </q-card-section>

      <q-card-section class="q-pa-md q-gutter-md row justify-center">
        <div v-for="i in 6" :key="i">
          <CardProject />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
