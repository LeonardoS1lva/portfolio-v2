<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FilterDefault from 'src/components/default/filters/FilterProjects.vue'
import FilterPixel from 'src/components/pixelArt/filters/FilterProjects.vue'
import CardListProjects from 'src/components/default/cards/CardListProjects.vue'
import CardListProjectsPixel from 'src/components/pixelArt/cards/CardListProjects.vue'
import projects from 'src/utils/allProjects'
import { useThemeStore } from 'src/stores/themeStore'

const useTheme = useThemeStore()
const { t } = useI18n()

const filterMap = {
  all: () => t('common.all'),
  vueQuasar: () => 'Vue/Quasar',
  htmlCss: () => 'HTML/CSS',
  javascript: () => 'Javascript',
  others: () => t('common.others'),
}

const filters = computed(() => Object.keys(filterMap).map((key) => filterMap[key]()))
const activeFilterKey = ref('all')
const activeFilterLabel = computed(() => filterMap[activeFilterKey.value]())

function onFilterChange(label) {
  const foundKey = Object.keys(filterMap).find((key) => filterMap[key]() === label)
  if (foundKey) activeFilterKey.value = foundKey
}

const filteredItems = computed(() => {
  switch (activeFilterKey.value) {
    case 'all':
      return projects
    case 'vueQuasar':
      return projects.filter((p) => p.stacks.includes('Vue') || p.stacks.includes('Quasar'))
    case 'htmlCss':
      return projects.filter((p) => p.stacks.includes('HTML') || p.stacks.includes('CSS'))
    case 'javascript':
      return projects.filter((p) => p.stacks.includes('JavaScript'))
    case 'others':
    default:
      return projects.filter((p) =>
        p.stacks.some((s) => !['Vue', 'Quasar', 'HTML', 'CSS', 'JavaScript'].includes(s)),
      )
  }
})
</script>

<template>
  <q-page class="row">
    <q-space />
    <div class="q-pt-xl col-11">
      <h1 class="text-h3 text-secondary-color">{{ t('pages.projectList.title') }}</h1>
      <h2 class="text-h6 q-pt-sm text-secondary-color-light">
        {{ t('pages.projectList.subtitle') }}
      </h2>

      <FilterDefault
        v-if="useTheme.theme !== 'pixel-art'"
        :filters="filters"
        :activeFilter="activeFilterLabel"
        @update:activeFilter="onFilterChange"
      />
      <FilterPixel
        v-else
        :filters="filters"
        :activeFilter="activeFilterLabel"
        @update:activeFilter="onFilterChange"
      />

      <div class="q-pt-md q-pb-lg row q-col-gutter-md">
        <div
          v-for="project in filteredItems"
          :key="project"
          class="col-lg-3 col-md-4 col-sm-6 col-12 row justify-center"
        >
          <CardListProjects
            v-if="useTheme.theme !== 'pixel-art'"
            :imgProject="project.imgProject"
            :altText="project.altText"
            :projectName="t(project.projectName)"
            :projectDescription="t(project.projectDescription)"
            :status="project.status"
            :hasLinkCode="project.hasLinkCode"
            :hasLinkProject="project.hasLinkProject"
            :linkCode="project.codeLink"
            :linkProject="project.projectLink"
            :stacks="project.stacks"
          />
          <CardListProjectsPixel
            v-else
            :imgProject="project.imgProject"
            :altText="project.altText"
            :projectName="t(project.projectName)"
            :projectDescription="t(project.projectDescription)"
            :status="project.status"
            :hasLinkCode="project.hasLinkCode"
            :hasLinkProject="project.hasLinkProject"
            :linkCode="project.codeLink"
            :linkProject="project.projectLink"
            :stacks="project.stacks"
          />
        </div>
      </div>
    </div>
    <q-space />

    <q-page-scroller position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="primary-color" text-color="third-color" />
    </q-page-scroller>
  </q-page>
</template>
