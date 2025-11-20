<script setup>
import HeroSection from 'src/components/default/HeroSection.vue'
import MyProjects from 'src/components/default/MyProjects.vue'
import MySkills from 'src/components/default/MySkills.vue'
import ContactMe from 'src/components/default/ContactMe.vue'

import HeroSectionPixel from 'src/components/pixelArt/HeroSectionPixel.vue'
import MyProjectsPixel from 'src/components/pixelArt/MyProjectsPixel.vue'
import MySkillsPixel from 'src/components/pixelArt/MySkillsPixel.vue'
import ContactMePixel from 'src/components/pixelArt/ContactMePixel.vue'

import { useThemeStore } from 'src/stores/themeStore'

const useTheme = useThemeStore()
</script>

<template>
  <q-page class="bg-background-stars">
    <div class="row bg-background-buildings">
      <q-space />
      <div class="col-11" v-if="useTheme.theme !== 'pixel-art'">
        <HeroSection id="home" />

        <q-separator class="q-my-md q-py-xs bg-primary-color" />

        <MyProjects id="projects" />

        <q-separator class="q-my-md q-py-xs bg-primary-color" />

        <MySkills id="skills" />

        <q-separator class="q-my-md q-py-xs bg-primary-color" />

        <ContactMe id="contact" />
      </div>
      <div class="col-11" v-else>
        <HeroSectionPixel id="home" />

        <q-separator class="q-my-md q-py-xs bg-primary-color" />

        <MyProjectsPixel id="projects" />

        <q-separator class="q-my-md q-py-xs bg-primary-color" />

        <MySkillsPixel id="skills" />

        <q-separator class="q-my-md q-py-xs bg-primary-color" />

        <ContactMePixel id="contact" />
      </div>
      <q-space />

      <q-page-scroller position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="primary-color" text-color="third-color" />
      </q-page-scroller>
    </div>
  </q-page>
</template>
