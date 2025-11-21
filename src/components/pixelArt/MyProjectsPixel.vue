<script setup>
import { useI18n } from 'vue-i18n'
import CardProjectPixel from 'src/components/pixelArt/cards/CardProjectPixel.vue'
import projects from 'src/utils/homeProjects'

const { t } = useI18n()
</script>

<template>
  <div class="row">
    <q-card class="col-12 bg-background-card" flat>
      <q-card-section class="q-pa-md text-center">
        <h3 class="text-secondary-color text-bold text-h4">{{ t('pages.myProjects.title') }}</h3>
        <div class="row">
          <q-space />
          <div class="col-md-6 col-12">
            <p class="text-h6 text-weight-regular text-secondary-color-light q-mt-md">
              {{ t('pages.myProjects.description') }}
            </p>
          </div>
          <q-space />
        </div>
      </q-card-section>

      <q-card-section class="q-pa-md q-gutter-md row justify-center">
        <div v-for="project in projects" :key="project.projectName">
          <CardProjectPixel
            :imgProject="project.imgProject"
            :projectName="t(project.projectName)"
            :projectDescription="t(project.projectDescription)"
            :projectLink="project.projectLink"
            :labelButton="t('common.viewProject')"
          />
        </div>
      </q-card-section>

      <q-card-section class="row justify-center">
        <q-btn
          no-caps
          :label="t('common.moreProjects')"
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
