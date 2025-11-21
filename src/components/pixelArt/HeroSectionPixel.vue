<script setup>
import { useI18n } from 'vue-i18n'
import logoPixel from 'src/assets/backgrounds/logo_holograma_pixel.png'

const { t } = useI18n()
</script>

<template>
  <div class="row">
    <q-card class="col-md-6 col-sm-12 flex items-center bg-background-card" flat>
      <div class="q-pa-md">
        <h1 class="text-secondary-color text-bold text-h3" style="line-height: 1.2">
          {{ t('pages.heroSection.title') }}
        </h1>
        <h2 class="text-secondary-color-light text-weight-regular text-h6 q-py-md">
          {{ t('pages.heroSection.subtitle') }}
        </h2>
        <div>
          <span>
            <q-btn class="nes-btn" href="https://github.com/LeonardoS1lva" target="_blank" no-caps>
              <i class="nes-icon github" :class="$q.screen.gt.sm ? 'is-medium' : 'is-small'"></i>
              <span class="q-ml-md nes-text text-grey-9">Github</span>
            </q-btn>
          </span>
          <span class="q-ml-md">
            <q-btn
              class="nes-btn is-primary"
              href="https://www.linkedin.com/in/leonardos1lva/"
              target="_blank"
              no-caps
            >
              <i class="nes-icon linkedin" :class="$q.screen.gt.sm ? 'is-medium' : 'is-small'"></i>
              <span class="q-ml-md nes-text">LinkedIn</span>
            </q-btn>
          </span>
        </div>
      </div>
    </q-card>

    <q-card class="col-6 bg-background-card gt-sm" flat>
      <q-img :src="logoPixel" fit="cover" style="image-rendering: pixelated" />
    </q-card>
  </div>
</template>

<style scoped>
@import '/node_modules/nes.css/css/nes.css';
</style>
