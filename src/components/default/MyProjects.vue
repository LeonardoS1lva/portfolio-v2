<script setup>
import { useI18n } from 'vue-i18n'
import CardProject from 'src/components/default/cards/CardProject.vue'
import { useThemeStore } from 'src/stores/themeStore'
import projects from 'src/utils/homeProjects'

const useTheme = useThemeStore()
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
        <div v-for="(project, index) in projects" :key="index">
          <CardProject
            :img-project="project.imgProject"
            :project-name="project.projectName"
            :project-description="project.projectDescription"
            :project-link="project.projectLink"
            :label-button="t('common.viewProject')"
          />
        </div>
      </q-card-section>

      <q-card-section class="row justify-center">
        <q-btn
          no-caps
          color="primary-color"
          text-color="third-color"
          :label="t('common.moreProjects')"
          icon="add"
          :size="useTheme.theme === 'pixel-art' ? 'md' : 'lg'"
          style="width: 300px; max-width: 100%"
          class="q-mt-md"
          :to="{ name: 'projects' }"
        />
      </q-card-section>
    </q-card>
  </div>
</template>
