<script setup>
import ContactMe from 'src/components/ContactMe.vue'
import HeroSection from 'src/components/HeroSection.vue'
import MyProjects from 'src/components/MyProjects.vue'
import MySkills from 'src/components/MySkills.vue'
</script>

<template>
  <q-page class="bg-background-stars">
    <div class="row bg-background-buildings">
      <q-space />
      <div class="col-11">
        <HeroSection id="home" />

        <q-separator class="q-my-md q-py-xs bg-primary-color" />

        <MyProjects id="projects" />

        <q-separator class="q-my-md q-py-xs bg-primary-color" />

        <MySkills id="skills" />

        <q-separator class="q-my-md q-py-xs bg-primary-color" />

        <ContactMe id="contact" />
      </div>
      <q-space />
    </div>
  </q-page>
</template>
