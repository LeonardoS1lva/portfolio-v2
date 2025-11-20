<script setup>
import CardProjectPixel from 'src/components/pixelArt/cards/CardProjectPixel.vue'
import plataformaCpid from 'src/assets/projects/plataforma_cpid.webp'
import redeBeijaFlor from 'src/assets/projects/rede_beija_flor.webp'

const projects = [
  {
    imgProject: plataformaCpid,
    projectName: 'Plataforma CPID',
    projectDescription: 'Descrição do Projeto 1.',
    projectLink: 'https://example.com/project1',
    labelButton: 'Ver Projeto',
  },
  {
    imgProject: redeBeijaFlor,
    projectName: 'Rede Beija Flor',
    projectDescription: 'Descrição do Projeto 2.',
    projectLink: 'https://example.com/project2',
    labelButton: 'Ver Projeto',
  },
  {},
  {},
]
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

      <q-card-section class="q-pa-md row">
        <div
          v-for="project in projects"
          :key="project.projectName"
          class="flex flex-center col-md-3"
        >
          <CardProjectPixel
            :imgProject="project.imgProject"
            :projectName="project.projectName"
            :projectDescription="project.projectDescription"
            :projectLink="project.projectLink"
            :labelButton="project.labelButton"
          />
        </div>
      </q-card-section>

      <q-card-section class="row justify-center">
        <q-btn
          no-caps
          label="Mais Projetos"
          icon="explore"
          size="md"
          style="width: 300px; max-width: 100%"
          class="nes-btn is-primary"
          :to="{ name: 'projects' }"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
@import '/node_modules/nes.css/css/nes.css';
</style>
