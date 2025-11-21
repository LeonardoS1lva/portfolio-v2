<script setup>
import { useI18n } from 'vue-i18n'
import { useTheme } from 'src/composables/useTheme.js'
import { useLanguage } from 'src/composables/useLanguage.js'
import iconHome from 'src/assets/icons/pixel-art/icon_home.png'
import iconWatercolor from 'src/assets/icons/pixel-art/watercolor_pxArt.png'
import iconLanguage from 'src/assets/icons/pixel-art/icon_globo.png'

const { changeTheme, themeOptions } = useTheme()
const { setLanguage, languageOptions, currentLanguage } = useLanguage()
const { t } = useI18n()

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
        <q-toolbar :class="$q.screen.gt.sm ? 'q-py-md' : 'q-py-sm'">
          <q-toolbar-title class="text-bold text-third-color">
            <q-btn flat class="text-third-color text-h6" to="/">
              <span class="text-bold gt-sm">Leonardo Silva</span>
              <q-icon :name="`img:${iconHome}`" class="lt-md" />
            </q-btn>
          </q-toolbar-title>
        </q-toolbar>

        <q-toolbar v-if="showLinks" class="col-6 gt-sm">
          <q-space />
          <nav>
            <q-btn flat color="third-color" :label="t('common.home')" to="#home" />
            <q-btn flat color="third-color" :label="t('common.projects')" to="#projects" />
            <q-btn flat color="third-color" :label="t('common.skills')" to="#skills" />
            <q-btn flat color="third-color" :label="t('common.contact')" to="#contact" />
          </nav>
          <q-space />
        </q-toolbar>

        <q-toolbar>
          <q-space />

          <q-btn
            round
            dense
            flat
            color="third-color"
            :icon="`img:${iconWatercolor}`"
            class="q-mr-md"
            padding="0"
            size="xl"
          >
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

          <q-btn
            round
            dense
            flat
            color="third-color"
            :icon="`img:${iconLanguage}`"
            class="q-mr-md"
            padding="0"
            size="xl"
          >
            <q-menu>
              <q-list>
                <q-item
                  v-for="language in languageOptions"
                  :key="language.value"
                  dense
                  clickable
                  @click="setLanguage(language.value)"
                  :active="language.value === currentLanguage"
                  active-class="text-third-color bg-primary-color"
                >
                  <q-item-section>
                    <q-item-label>{{ language.label }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </div>
    </div>
    <q-space />

    <div v-if="showLinks" class="col-12 lt-md">
      <q-separator class="bg-third-color" />
      <div class="row">
        <q-space />
        <nav class="col-10 q-py-sm row">
          <q-btn
            flat
            dense
            color="third-color"
            class="text-caption col-6"
            :label="t('common.home')"
            to="#home"
          />

          <q-btn
            flat
            dense
            color="third-color"
            class="text-caption col-6"
            :label="t('common.projects')"
            to="#projects"
          />

          <q-btn
            flat
            dense
            color="third-color"
            class="text-caption col-6"
            :label="t('common.skills')"
            to="#skills"
          />

          <q-btn
            flat
            dense
            color="third-color"
            class="text-caption col-6"
            :label="t('common.contact')"
            to="#contact"
          />
        </nav>
        <q-space />
      </div>
    </div>
  </q-header>
</template>
