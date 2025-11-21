<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div
    class="fullscreen bg-primary-color text-secondary-color text-center q-pa-md flex flex-center"
  >
    <div style="max-width: 600px; width: 100%">
      <div style="font-size: 30vh">404</div>

      <div :class="$q.screen.gt.sm ? 'text-h2' : 'text-h5'" style="opacity: 0.4">
        {{ t('pages.errorNotFound.text') }}
      </div>

      <q-btn
        class="q-mt-xl"
        color="secondary-color"
        text-color="primary-color"
        unelevated
        to="/"
        :label="t('pages.errorNotFound.button')"
        no-caps
      />
    </div>
  </div>
</template>
