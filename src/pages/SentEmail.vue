<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <q-page class="flex flex-center">
    <q-card class="text-center bg-background-card" flat style="max-width: 450px; width: 100%">
      <h1 class="text-h3 text-secondary-color">{{ t('pages.sentEmail.title') }}</h1>
      <h2 class="text-h6 q-pt-md text-secondary-color-light">
        {{ t('pages.sentEmail.description') }}
      </h2>
      <q-btn
        color="primary-color"
        text-color="third-color"
        :label="t('pages.sentEmail.backHome')"
        to="/"
        class="q-mt-md"
      />
    </q-card>
  </q-page>
</template>
