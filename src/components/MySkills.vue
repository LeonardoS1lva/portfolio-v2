<script setup>
import CardTechs from 'src/components/cards/CardTechs.vue'
import { useThemeStore } from 'src/stores/themeStore'
import { computed } from 'vue'

import vueLogo from 'src/assets/icons/pixel-art/tecnologies/vue_pxArt.png'
import quasarLogo from 'src/assets/icons/pixel-art/tecnologies/quasar_pxArt.png'
import nodeLogo from 'src/assets/icons/pixel-art/tecnologies/node_pxArt.png'
import htmlLogo from 'src/assets/icons/pixel-art/tecnologies/html_pxArt.png'
import cssLogo from 'src/assets/icons/pixel-art/tecnologies/css_pxArt.png'
import jsLogo from 'src/assets/icons/pixel-art/tecnologies/javascript_pxArt.png'
import gitLogo from 'src/assets/icons/pixel-art/tecnologies/git_pxArt.png'
import githubLogo from 'src/assets/icons/pixel-art/tecnologies/github_pxArt.png'
import bootstrapLogo from 'src/assets/icons/pixel-art/tecnologies/bootstrap_pxArt.png'
import tailwindLogo from 'src/assets/icons/pixel-art/tecnologies/tailwind_pxArt.png'
import reactLogo from 'src/assets/icons/pixel-art/tecnologies/react_pxArt.png'
import storybookLogo from 'src/assets/icons/pixel-art/tecnologies/storybook_pxArt.png'
import figmaLogo from 'src/assets/icons/pixel-art/tecnologies/figma_pxArt.png'
import postmanLogo from 'src/assets/icons/pixel-art/tecnologies/postman_pxArt.png'
import vscodeLogo from 'src/assets/icons/pixel-art/tecnologies/vscode_pxArt.png'
import pwaLogo from 'src/assets/icons/pixel-art/tecnologies/pwa_pxArt.png'
import viteLogo from 'src/assets/icons/pixel-art/tecnologies/vite_pxArt.png'

const themeStore = useThemeStore()

const mySkills = computed(() => [
  {
    name: 'Vue.js',
    icon: themeStore.theme === 'pixel-art' ? vueLogo : 'fab fa-vuejs',
    color: '#42b883',
  },
  {
    name: 'Quasar',
    icon:
      themeStore.theme === 'pixel-art' ? quasarLogo : 'img:src/assets/icons/quasar-original.svg',
    color: '#27A9E1',
  },
  {
    name: 'Node.js',
    icon: themeStore.theme === 'pixel-art' ? nodeLogo : 'fab fa-node',
    color: '#8CC84B',
  },
  {
    name: 'HTML',
    icon: themeStore.theme === 'pixel-art' ? htmlLogo : 'fab fa-html5',
    color: '#E34F26',
  },
  {
    name: 'CSS',
    icon: themeStore.theme === 'pixel-art' ? cssLogo : 'fab fa-css3',
    color: '#1572B6',
  },
  {
    name: 'JavaScript',
    icon: themeStore.theme === 'pixel-art' ? jsLogo : 'fab fa-js',
    color: '#F7DF1E',
  },
  {
    name: 'Git',
    icon: themeStore.theme === 'pixel-art' ? gitLogo : 'fab fa-git-alt',
    color: '#F05032',
  },
  {
    name: 'GitHub',
    icon: themeStore.theme === 'pixel-art' ? githubLogo : 'fab fa-github',
    color: themeStore.theme === 'light' ? '#181717' : '#F7F7F7',
  },
  {
    name: 'Bootstrap',
    icon: themeStore.theme === 'pixel-art' ? bootstrapLogo : 'fab fa-bootstrap',
    color: '#563D7C',
  },
  {
    name: 'Tailwind CSS',
    icon:
      themeStore.theme === 'pixel-art'
        ? tailwindLogo
        : 'img:src/assets/icons/tailwindcss-original.svg',
    color: '#06B6D4',
  },
  {
    name: 'React',
    icon: themeStore.theme === 'pixel-art' ? reactLogo : 'fab fa-react',
    color: '#61DAFB',
  },
  {
    name: 'Storybook',
    icon:
      themeStore.theme === 'pixel-art'
        ? storybookLogo
        : 'img:src/assets/icons/storybook-original.svg',
    color: '#FF4785',
  },
  {
    name: 'Figma',
    icon: themeStore.theme === 'pixel-art' ? figmaLogo : 'img:src/assets/icons/figma-original.svg',
    color: '#F24E1E',
  },
  {
    name: 'Postman',
    icon:
      themeStore.theme === 'pixel-art' ? postmanLogo : 'img:src/assets/icons/postman-original.svg',
    color: '#FF6C37',
  },
  {
    name: 'VS Code',
    icon:
      themeStore.theme === 'pixel-art' ? vscodeLogo : 'img:src/assets/icons/vscode-original.svg',
    color: '#007ACC',
  },
  {
    name: 'PWA',
    icon: themeStore.theme === 'pixel-art' ? pwaLogo : 'fas fa-mobile-alt',
    color: '#000000',
  },
  {
    name: 'Vite',
    icon: themeStore.theme === 'pixel-art' ? viteLogo : 'img:src/assets/icons/vitejs-original.svg',
    color: '#646CFF',
  },
])
</script>

<template>
  <div class="row">
    <q-card class="col-12 bg-background-card" flat>
      <q-card-section class="q-pa-md text-center">
        <h3 class="text-secondary-color text-bold text-h4">Tecnologias e Ferramentas</h3>
        <div class="row">
          <q-space />
          <div class="col-md-6 col-12">
            <p class="text-h6 text-weight-regular text-secondary-color-light q-mt-md">
              Aqui estão algumas das tecnologias e ferramentas que utilizo no meu dia a dia ou que
              já tive algum contato.
            </p>
          </div>
          <q-space />
        </div>
      </q-card-section>

      <q-card-section class="q-pa-md q-gutter-md row justify-center">
        <div v-for="tech in mySkills" :key="tech.name">
          <CardTechs
            :name-icon="tech.icon"
            :color-icon="tech.color"
            :name="tech.name"
            :has-extern-icon="themeStore.theme === 'pixel-art'"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
