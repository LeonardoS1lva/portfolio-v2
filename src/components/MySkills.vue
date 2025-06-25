<script setup>
import CardTechs from 'src/components/cards/CardTechs.vue'
import { useThemeStore } from 'src/stores/themeStore'
import { computed } from 'vue'

const themeStore = useThemeStore()

const mySkills = computed(() => [
  { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#42b883' },
  { name: 'Quasar', icon: 'img:src/assets/icons/quasar-original.svg', color: '#27A9E1' },
  { name: 'Node.js', icon: 'fab fa-node', color: '#8CC84B' },
  { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' },
  { name: 'CSS', icon: 'fab fa-css3', color: '#1572B6' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
  { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
  {
    name: 'GitHub',
    icon: 'fab fa-github',
    color: themeStore.theme === 'light' ? '#181717' : '#F7F7F7',
  },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#563D7C' },
  { name: 'Tailwind CSS', icon: 'img:src/assets/icons/tailwindcss-original.svg', color: '#06B6D4' },
  { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
  { name: 'Storybook', icon: 'img:src/assets/icons/storybook-original.svg', color: '#FF4785' },
  { name: 'Figma', icon: 'img:src/assets/icons/figma-original.svg', color: '#F24E1E' },
  { name: 'Postman', icon: 'img:src/assets/icons/postman-original.svg', color: '#FF6C37' },
  { name: 'VS Code', icon: 'img:src/assets/icons/vscode-original.svg', color: '#007ACC' },
  { name: 'PWA', icon: 'fas fa-mobile-alt', color: '#4DBA87' },
  { name: 'Vite', icon: 'img:src/assets/icons/vitejs-original.svg', color: '#646CFF' },
])
</script>

<template>
  <div class="row">
    <q-card class="col-12 bg-background-card" flat>
      <q-card-section class="q-pa-md text-center">
        <h3 class="text-secondary-color text-bold text-h4">Tecnologias e Ferramentas</h3>
        <p class="text-secondary-color-light text-subtitle1 q-mt-md">
          Aqui estão algumas das tecnologias e ferramentas que utilizo no meu dia a dia ou que já
          tive algum contato.
        </p>
      </q-card-section>

      <q-card-section class="q-pa-md q-gutter-md row justify-center">
        <div v-for="tech in mySkills" :key="tech.name" class="q-mr-md">
          <CardTechs :name-icon="tech.icon" :color-icon="tech.color" :name="tech.name" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
