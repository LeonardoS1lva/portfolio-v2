<script setup>
import CardTechs from 'src/components/default/cards/CardTechs.vue'
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

const mySkills = computed(() => [
  {
    name: 'Vue.js',
    icon: vueLogo,
    color: '#42b883',
  },
  {
    name: 'Quasar',
    icon: quasarLogo,
    color: '#27A9E1',
  },
  {
    name: 'Node.js',
    icon: nodeLogo,
    color: '#8CC84B',
  },
  {
    name: 'HTML',
    icon: htmlLogo,
    color: '#E34F26',
  },
  {
    name: 'CSS',
    icon: cssLogo,
    color: '#1572B6',
  },
  {
    name: 'JavaScript',
    icon: jsLogo,
    color: '#F7DF1E',
  },
  {
    name: 'Git',
    icon: gitLogo,
    color: '#F05032',
  },
  {
    name: 'GitHub',
    icon: githubLogo,
    color: '#F7F7F7',
  },
  {
    name: 'Bootstrap',
    icon: bootstrapLogo,
    color: '#563D7C',
  },
  {
    name: 'Tailwind CSS',
    icon: tailwindLogo,
    color: '#06B6D4',
  },
  {
    name: 'React',
    icon: reactLogo,
    color: '#61DAFB',
  },
  {
    name: 'Storybook',
    icon: storybookLogo,
    color: '#FF4785',
  },
  {
    name: 'Figma',
    icon: figmaLogo,
    color: '#F24E1E',
  },
  {
    name: 'Postman',
    icon: postmanLogo,
    color: '#FF6C37',
  },
  {
    name: 'VS Code',
    icon: vscodeLogo,
    color: '#007ACC',
  },
  {
    name: 'PWA',
    icon: pwaLogo,
    color: '#000000',
  },
  {
    name: 'Vite',
    icon: viteLogo,
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
            has-extern-icon
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
