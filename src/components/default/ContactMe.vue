<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Notify } from 'quasar'
import { useThemeStore } from 'src/stores/themeStore'

const useTheme = useThemeStore()
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
              <span class="text-secondary-color text-weight-medium"> {{ t('common.name') }} </span>
              <q-input
                outlined
                v-model="form.name"
                name="name"
                autocomplete="name"
                :label="t('common.yourName')"
                class="q-mb-md q-mt-sm"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || t('notifications.nameEmpty')]"
                color="secondary-color"
                :dark="useTheme.theme !== 'light'"
              />
              <span class="text-secondary-color text-weight-medium text-weight-medium">
                {{ t('common.email') }}
              </span>
              <q-input
                outlined
                v-model="form.email"
                name="email"
                autocomplete="email"
                :label="t('common.yourEmail')"
                type="email"
                class="q-mb-md q-mt-sm"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || t('notifications.emailEmpty'),
                  (val) => /.+@.+\..+/.test(val) || t('notifications.invalidEmail'),
                ]"
                color="secondary-color"
                :dark="useTheme.theme !== 'light'"
              />
              <span class="text-secondary-color text-weight-medium">
                {{ t('common.message') }}
              </span>
              <q-input
                outlined
                v-model="form.message"
                name="message"
                :label="t('common.yourMessage')"
                type="textarea"
                class="q-mb-md q-mt-sm"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || t('notifications.messageEmpty')]"
                color="secondary-color"
                :dark="useTheme.theme !== 'light'"
              />

              <input type="hidden" name="_next" :value="`${mySite}/sent`" />

              <q-btn
                color="primary-color"
                text-color="third-color"
                :label="t('common.sendMessage')"
                type="submit"
                :class="$q.screen.lt.md ? 'full-width' : ''"
              />
            </q-form>
          </div>

          <div class="col-md-6 col-12" :class="$q.screen.lt.md ? 'row justify-between' : ''">
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
              <div :class="$q.screen.lt.md ? 'row justify-center' : ''">
                <q-btn
                  no-caps
                  flat
                  class="text-secondary-color-light"
                  icon="fab fa-linkedin"
                  href="https://www.linkedin.com/in/leonardos1lva/"
                  target="_blank"
                />
                <q-btn
                  no-caps
                  flat
                  class="text-secondary-color-light"
                  icon="fab fa-github"
                  href="https://github.com/LeonardoS1lva"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
