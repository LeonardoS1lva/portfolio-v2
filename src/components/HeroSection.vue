<script setup>
import logo from 'src/assets/backgrounds/logo_holograma.png'
import logoYellow from 'src/assets/backgrounds/logo_holograma_yellow.png'
import logoPixel from 'src/assets/backgrounds/logo_holograma_pixel.png'
import logoGray from 'src/assets/backgrounds/logo_holograma_gray.png'
import { useThemeStore } from 'src/stores/themeStore'
import { computed } from 'vue'

const useTheme = useThemeStore()

const logoImg = computed(() => {
  if (useTheme.theme === 'black-yellow') {
    return logoYellow
  } else if (useTheme.theme === 'pixel-art') {
    return logoPixel
  } else if (useTheme.theme === 'dark') {
    return logoGray
  }
  return logo
})
</script>

<template>
  <div class="row">
    <q-card class="col-md-6 col-sm-12 flex items-center bg-background-card" flat>
      <div class="q-pa-md">
        <h1
          class="text-secondary-color text-bold"
          :class="$q.screen.gt.sm ? 'text-h3' : 'text-h4 text-center q-pt-md'"
        >
          Olá, me chamo Leonardo Silva
        </h1>
        <h2
          class="text-secondary-color-light text-weight-regular text-h6 q-my-md"
          :class="$q.screen.gt.sm ? '' : 'text-center'"
        >
          Sou um desenvolvedor web e aqui você pode conhecer um pouco mais sobre mim e ver alguns
          dos meus projetos.
        </h2>
        <div :class="$q.screen.gt.sm ? '' : 'text-center'">
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
      <!-- :src="useTheme.theme === 'black-yellow' ? logoYellow : logo" -->
      <q-img :src="logoImg" style="object-fit: cover" />
    </q-card>
  </div>
</template>
