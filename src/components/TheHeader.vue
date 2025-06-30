<script setup>
import { useTheme } from 'src/composables/useTheme.js'

const { changeTheme, themeOptions } = useTheme()

defineProps({
  showLinks: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <q-header elevated class="bg-primary-color row">
    <q-space />
    <div class="col-11">
      <div class="row no-wrap">
        <q-toolbar class="q-py-md">
          <q-toolbar-title class="text-bold text-third-color">
            <q-btn flat class="text-third-color text-h6" to="/">
              <span class="text-bold gt-sm">Leonardo Silva</span>
              <q-icon name="home" class="lt-md" />
            </q-btn>
          </q-toolbar-title>
        </q-toolbar>

        <q-toolbar v-if="showLinks">
          <q-space />
          <nav>
            <q-btn flat color="third-color" label="Início" class="q-mr-sm" to="#home" />
            <q-btn flat color="third-color" label="Projetos" class="q-mr-sm" to="#projects" />
            <q-btn flat color="third-color" label="Habilidades" class="q-mr-sm" to="#skills" />
            <q-btn flat color="third-color" label="Contato" class="q-mr-sm" to="#contact" />
          </nav>
          <q-space />
        </q-toolbar>

        <q-toolbar>
          <q-space />

          <q-btn round dense flat color="third-color" icon="palette" class="q-mr-md">
            <q-menu>
              <q-list>
                <q-item
                  v-for="theme in themeOptions"
                  :key="theme.value"
                  clickable
                  @click="changeTheme(theme.value)"
                  dense
                  :class="`option-${theme.value}`"
                >
                  <q-item-section>
                    <q-item-label>{{ theme.label }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </div>
    </div>
    <q-space />
  </q-header>
</template>
