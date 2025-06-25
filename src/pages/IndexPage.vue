<script setup>
import HeroSection from 'src/components/HeroSection.vue'
import MyProjects from 'src/components/MyProjects.vue'
import MySkills from 'src/components/MySkills.vue'
</script>

<template>
  <q-page>
    <div class="row">
      <q-space />
      <div class="col-11">
        <HeroSection />

        <q-separator class="q-my-md q-py-xs bg-primary-color" />

        <MyProjects />

        <q-separator class="q-my-md q-py-xs bg-primary-color" />

        <MySkills />
      </div>
      <q-space />
    </div>
  </q-page>
</template>
