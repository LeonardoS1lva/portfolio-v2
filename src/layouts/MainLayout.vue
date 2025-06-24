<script setup>
import { useTheme } from 'src/composables/useTheme.js'

const { changeTheme, themeOptions } = useTheme()
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary-color">
      <q-toolbar class="q-py-md">
        <q-toolbar-title class="text-bold text-third-color"> Leonardo Silva </q-toolbar-title>

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
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
