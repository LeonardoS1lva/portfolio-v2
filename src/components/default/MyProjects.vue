<script setup>
import CardProject from 'src/components/default/cards/CardProject.vue'
</script>

<template>
  <div class="row">
    <q-card class="col-12 bg-background-card" flat>
      <q-card-section class="q-pa-md text-center">
        <h3 class="text-secondary-color text-bold text-h4">Meus Projetos</h3>
        <div class="row">
          <q-space />
          <div class="col-md-6 col-12">
            <p class="text-h6 text-weight-regular text-secondary-color-light q-mt-md">
              Alguns dos projetos que desenvolvi, tanto pessoais quanto profissionais. Clique no
              botão para ver mais detalhes sobre cada projeto.
            </p>
          </div>
          <q-space />
        </div>
      </q-card-section>

      <q-card-section class="q-pa-md q-gutter-md row justify-center">
        <div v-for="i in 4" :key="i">
          <CardProject />
        </div>
      </q-card-section>

      <q-card-section class="row justify-center">
        <q-btn
          no-caps
          color="primary-color"
          text-color="third-color"
          label="Mais Projetos"
          icon="add"
          size="lg"
          style="width: 300px; max-width: 100%"
          class="q-mt-md"
          :to="{ name: 'projects' }"
        />
      </q-card-section>
    </q-card>
  </div>
</template>
