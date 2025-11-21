<script setup>
import { Notify } from 'quasar'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const myEmail = import.meta.env.VITE_MY_EMAIL
const mySite = import.meta.env.VITE_MY_SITE

const form = ref({
  name: '',
  email: '',
  message: '',
})

const submitForm = (event) => {
  event.preventDefault()
  if (form.value.name && form.value.email && form.value.message) {
    event.target.submit()

    form.value.name = ''
    form.value.email = ''
    form.value.message = ''
  } else {
    Notify.create({
      type: 'negative',
      message: t('notifications.allEmpty'),
      position: 'top',
      timeout: 3000,
    })
  }
}
</script>

<template>
  <div class="row q-mb-md">
    <q-card class="col-12 bg-background-card" flat>
      <q-card-section class="q-pa-md text-center">
        <h3 class="text-secondary-color text-bold text-h4">{{ t('pages.contactMe.title') }}</h3>
        <div class="row">
          <q-space />
          <div class="col-md-6 col-12">
            <p class="text-h6 text-weight-regular text-secondary-color-light q-mt-md">
              {{ t('pages.contactMe.description') }}
            </p>
          </div>
          <q-space />
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row q-col-gutter-xl q-pa-md">
          <div class="col-md-6 col-12">
            <q-form :action="`https://formsubmit.co/${myEmail}`" method="POST" @submit="submitForm">
              <span class="text-secondary-color"> {{ t('common.name') }} </span>
              <div class="q-pb-md q-pt-sm">
                <q-input
                  v-model="form.name"
                  name="name"
                  autocomplete="name"
                  class="nes-input is-dark"
                  dense
                  borderless
                  label-color="secondary-color"
                  color="secondary-color"
                  :placeholder="t('common.yourName')"
                />
              </div>
              <span class="text-secondary-color"> {{ t('common.email') }} </span>
              <div class="q-pb-md q-pt-sm">
                <q-input
                  v-model="form.email"
                  name="email"
                  autocomplete="email"
                  type="email"
                  class="nes-input is-dark"
                  dense
                  borderless
                  label-color="secondary-color"
                  color="secondary-color"
                  :placeholder="t('common.yourEmail')"
                />
              </div>
              <span class="text-secondary-color"> {{ t('common.message') }} </span>
              <div class="q-pb-md q-pt-sm">
                <q-input
                  v-model="form.message"
                  name="message"
                  type="textarea"
                  class="nes-input is-dark"
                  dense
                  borderless
                  label-color="secondary-color"
                  color="secondary-color"
                  :placeholder="t('common.yourMessage')"
                />
              </div>

              <input type="hidden" name="_next" :value="`${mySite}/sent`" />

              <q-btn
                class="nes-btn is-primary"
                :class="$q.screen.lt.md ? 'full-width' : ''"
                type="submit"
                :label="t('common.sendMessage')"
              />
            </q-form>
          </div>

          <div class="col-md-6 col-12">
            <div>
              <h6 class="text-h6 text-bold text-secondary-color">
                {{ t('common.directContact') }}
              </h6>
              <div class="text-subtitle2 q-pt-sm text-secondary-color-light">
                <p class="no-margin">leosilvac95@gmail.com</p>
                <p>+55 27 99850-1150</p>
              </div>
            </div>
            <div>
              <h6 class="text-h6 text-bold text-secondary-color">{{ t('common.socialMedia') }}</h6>
              <div>
                <span>
                  <a
                    href="https://www.linkedin.com/in/leonardos1lva/"
                    target="_blank"
                    title="LinkedIn"
                  >
                    <i class="nes-icon linkedin is-medium"> </i>
                  </a>
                </span>
                <span class="q-ml-md">
                  <a href="https://github.com/LeonardoS1lva" target="_blank" title="GitHub">
                    <i class="nes-icon github is-medium"> </i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
@import '/node_modules/nes.css/css/nes.css';
</style>
