<script setup>
import logo from 'src/assets/backgrounds/logo_holograma.png'
</script>

<template>
  <div class="row">
    <q-card class="col-md-6 col-sm-12 flex items-center bg-background-card" flat>
      <div class="q-pa-md">
        <h1 class="text-secondary-color text-bold text-h3">Olá, me chamo Leonardo Silva</h1>
        <h2 class="text-secondary-color-light text-weight-regular text-h5 q-my-md">
          Sou um desenvolvedor web e aqui você pode conhecer um pouco mais sobre mim e ver alguns
          dos meus projetos.
        </h2>
        <div>
          <q-btn
            color="primary-color"
            text-color="third-color"
            label="Github"
            icon="fab fa-github"
            href="https://github.com/LeonardoS1lva"
            target="_blank"
            no-caps
          />
          <q-btn
            class="q-ml-md"
            color="primary-color"
            text-color="third-color"
            label="LinkedIn"
            icon="fab fa-linkedin"
            href="https://www.linkedin.com/in/leonardos1lva/"
            target="_blank"
            no-caps
          />
        </div>
      </div>
    </q-card>

    <q-card class="col-6 bg-background-card gt-sm" flat>
      <q-img :src="logo" style="object-fit: cover" />
    </q-card>
  </div>
</template>
