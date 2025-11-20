<script setup>
import { useThemeStore } from 'src/stores/themeStore'
import { ref } from 'vue'

const useTheme = useThemeStore()

const myEmail = import.meta.env.VITE_MY_EMAIL
const mySite = import.meta.env.VITE_MY_SITE

const form = ref({
  name: '',
  email: '',
  message: '',
})

const submitForm = (event) => {
  if (form.value.name && form.value.email && form.value.message) {
    // console.log('Formulário enviado:', {
    //   name: form.value.name,
    //   email: form.value.email,
    //   message: form.value.message,
    // })
    console.log('Formulário enviado com sucesso!')

    event.target.submit()

    form.value.name = ''
    form.value.email = ''
    form.value.message = ''
  }
}
</script>

<template>
  <div class="row q-mb-md">
    <q-card class="col-12 bg-background-card" flat>
      <q-card-section class="q-pa-md text-center">
        <h3 class="text-secondary-color text-bold text-h4">Entre em Contato</h3>
        <div class="row">
          <q-space />
          <div class="col-md-6 col-12">
            <p class="text-h6 text-weight-regular text-secondary-color-light q-mt-md">
              Tem algum projeto em mente ou gostaria de discutir uma ideia? Sinta-se à vontade para
              entrar em contato!
            </p>
          </div>
          <q-space />
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row q-col-gutter-xl q-pa-md">
          <div class="col-md-6 col-12">
            <q-form :action="`https://formsubmit.co/${myEmail}`" method="POST" @submit="submitForm">
              <span class="text-secondary-color text-weight-medium"> Nome </span>
              <q-input
                outlined
                v-model="form.name"
                name="name"
                autocomplete="name"
                label="Seu Nome"
                class="q-mb-md q-mt-sm"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Nome não pode ser vazio']"
                color="secondary-color"
                :dark="useTheme.theme !== 'light'"
              />
              <span class="text-secondary-color text-weight-medium text-weight-medium">
                Email
              </span>
              <q-input
                outlined
                v-model="form.email"
                name="email"
                autocomplete="email"
                label="Seu Email"
                type="email"
                class="q-mb-md q-mt-sm"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Email não pode ser vazio',
                  (val) => /.+@.+\..+/.test(val) || 'Por favor, digite um email válido',
                ]"
                color="secondary-color"
                :dark="useTheme.theme !== 'light'"
              />
              <span class="text-secondary-color text-weight-medium"> Mensagem </span>
              <q-input
                outlined
                v-model="form.message"
                name="message"
                label="Sua Mensagem"
                type="textarea"
                class="q-mb-md q-mt-sm"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Por favor, digite uma mensagem']"
                color="secondary-color"
                :dark="useTheme.theme !== 'light'"
              />

              <input type="hidden" name="_next" :value="`${mySite}/sent`" />

              <q-btn
                color="primary-color"
                text-color="third-color"
                label="Enviar Mensagem"
                type="submit"
                :class="$q.screen.lt.md ? 'full-width' : ''"
              />
            </q-form>
          </div>

          <div class="col-md-6 col-12" :class="$q.screen.lt.md ? 'row justify-between' : ''">
            <div>
              <h6 class="text-h6 text-bold text-secondary-color">Contato Direto</h6>
              <div class="text-subtitle2 q-pt-sm text-secondary-color-light">
                <p class="no-margin">leosilvac95@gmail.com</p>
                <p>+55 27 99850-1150</p>
              </div>
            </div>
            <div>
              <h6 class="text-h6 text-bold text-secondary-color">Redes Sociais</h6>
              <div :class="$q.screen.lt.md ? 'row justify-center' : ''">
                <q-btn
                  no-caps
                  flat
                  class="text-secondary-color-light"
                  icon="fab fa-linkedin"
                  href="https://www.linkedin.com/in/leonardo-correia95"
                  target="_blank"
                />
                <q-btn
                  no-caps
                  flat
                  class="text-secondary-color-light"
                  icon="fab fa-github"
                  href="https://github.com/leonardo-correia"
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
