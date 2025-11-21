<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import defaultImg from 'src/assets/projects/PlaceholderImg.png'

const { t } = useI18n()

const props = defineProps({
  imgProject: {
    type: String,
    default: defaultImg,
  },
  altText: {
    type: String,
    default: 'Project Image',
  },
  projectName: {
    type: String,
    default: 'Projeto Exemplo',
  },
  projectDescription: {
    type: String,
    default: 'Descrição breve do projeto exemplo.',
  },
  colorStatus: {
    type: String,
    default: 'primary-color',
  },
  textColorStatus: {
    type: String,
    default: 'primary-color',
  },
  status: {
    type: Number,
    default: 4,
  },
  hasLinkCode: {
    type: Boolean,
    default: true,
  },
  hasLinkProject: {
    type: Boolean,
    default: true,
  },
  linkCode: {
    type: String,
  },
  linkProject: {
    type: String,
  },
  stacks: {
    type: Array,
    default: () => [],
  },
})

const getStatus = computed(() => {
  switch (props.status) {
    case 1:
      return {
        status: t('common.progress'),
        backgroundColor: 'is-warning',
        textColor: 'white',
      }
    case 2:
      return {
        status: t('common.completed'),
        backgroundColor: 'is-success',
        textColor: 'white',
      }
    case 3:
      return {
        status: t('common.paused'),
        backgroundColor: 'is-error',
        textColor: 'white',
      }
    default:
      return {
        status: t('common.unknown'),
        backgroundColor: 'grey-3',
        textColor: 'white',
      }
  }
})
</script>

<template>
  <q-card
    style="width: 100%; max-width: 400px; border-radius: 12px; padding: 4px"
    class="row column full-height bg-background-card nes-container is-rounded is-dark"
  >
    <q-img :src="imgProject" :alt="altText" :ratio="16 / 9" />

    <q-card-section class="q-pb-none">
      <div class="row justify-end">
        <div class="nes-badge" style="width: 150px">
          <span class="text-caption" :class="getStatus.backgroundColor">
            {{ getStatus.status }}
          </span>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <span class="text-h5 text-secondary-color">{{ projectName }}</span>
      <div class="text-body2 text-secondary-color-light q-pt-md">{{ projectDescription }}</div>
    </q-card-section>

    <q-card-section v-if="stacks.length">
      <div
        v-for="stack in stacks"
        :key="stack"
        class="nes-container is-rounded is-dark inline-block"
        style="padding-inline: 4px; padding-block: 8px"
      >
        <span class="bg-primary-color q-pa-sm rounded-borders">{{ stack }}</span>
      </div>
    </q-card-section>

    <q-space />

    <q-card-actions align="right">
      <a
        v-if="hasLinkCode"
        class="nes-btn"
        :href="linkCode"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="text-black">{{ t('common.viewCode') }}</span>
      </a>
      <a
        v-if="hasLinkProject"
        class="nes-btn"
        :href="linkProject"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="text-black">{{ t('common.viewProject') }}</span>
      </a>
    </q-card-actions>
  </q-card>
</template>

<style scoped>
@import '/node_modules/nes.css/css/nes.css';
</style>
