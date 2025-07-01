<script setup>
defineProps({
  showContact: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <q-footer class="bg-primary-color text-third-color q-py-sm">
    <div class="row q-pt-md" v-if="showContact">
      <q-space />
      <div class="col-11">
        <div class="row justify-between q-col-gutter-md">
          <div class="q-col-gutter-y-sm">
            <h5 class="text-bold">Contato</h5>
            <div>
              <q-icon name="email" class="text-third-color" size="sm" />
              <q-btn
                no-caps
                flat
                label="leosilvac95@gmail.com"
                href="mailto:leosilvac95@gmail.com"
              />
            </div>
          </div>

          <div class="q-col-gutter-y-sm">
            <h5 class="text-bold">Links Rápidos</h5>
            <nav class="row column">
              <q-btn flat class="text-third-color" to="#home" label="Início" align="left" />
              <q-btn flat class="text-third-color" to="#projects" label="Projetos" align="left" />
              <q-btn flat class="text-third-color" to="#skills" label="Habilidades" align="left" />
              <q-btn flat class="text-third-color" to="#contact" label="Contato" align="left" />
            </nav>
          </div>

          <div class="q-col-gutter-y-sm">
            <h5 class="text-bold">Redes Sociais</h5>
            <nav class="row column">
              <q-btn
                flat
                class="text-third-color q-mr-sm"
                label="LinkedIn"
                icon="fab fa-linkedin"
                href="https://www.linkedin.com/in/leonardos1lva"
                target="_blank"
                align="left"
              />
              <q-btn
                flat
                class="text-third-color"
                label="GitHub"
                icon="fab fa-github"
                href="https://github.com/leonardos1lva"
                target="_blank"
                align="left"
              />
            </nav>
          </div>
        </div>
      </div>
      <q-space />
    </div>

    <q-separator class="q-my-md bg-third-color" v-if="showContact" />

    <div class="text-center">
      <p>&copy; 2025 Leonardo Silva. Todos os direitos reservados.</p>
    </div>
  </q-footer>
</template>
