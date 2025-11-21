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
    default: 'Example Project',
  },
  projectDescription: {
    type: String,
    default: 'Description of the example project.',
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
        backgroundColor: 'yellow-3',
        textColor: 'yellow-10',
      }
    case 2:
      return {
        status: t('common.completed'),
        backgroundColor: 'green-3',
        textColor: 'green-10',
      }
    case 3:
      return {
        status: t('common.paused'),
        backgroundColor: 'red-3',
        textColor: 'red-10',
      }
    default:
      return {
        status: t('common.unknown'),
        backgroundColor: 'grey-3',
        textColor: 'grey-10',
      }
  }
})
</script>

<template>
  <q-card
    style="width: 100%; max-width: 400px; border-radius: 12px"
    class="row column full-height bg-background-card"
  >
    <q-img :src="imgProject" :alt="altText" :ratio="16 / 9" />

    <q-card-section>
      <div class="text-h6 text-secondary-color row justify-between no-wrap items-center">
        <span>{{ projectName }}</span>

        <q-chip
          outline
          size="sm"
          :color="getStatus.textColor"
          :text-color="getStatus.textColor"
          :class="`bg-${getStatus.backgroundColor} text-bold`"
        >
          {{ getStatus.status }}
        </q-chip>
      </div>
      <div class="text-body2 text-secondary-color-light q-pt-sm">{{ projectDescription }}</div>
    </q-card-section>

    <q-card-section v-if="stacks.length">
      <q-chip v-for="stack in stacks" :key="stack" color="primary-color" text-color="third-color">
        {{ stack }}
      </q-chip>
    </q-card-section>

    <q-space />

    <q-card-actions align="right">
      <q-btn
        flat
        no-caps
        color="primary-color"
        text-color="secondary-color"
        :label="t('common.viewCode')"
        :href="linkCode"
        target="_blank"
        rel="noopener noreferrer"
        class="text-weight-medium"
        v-if="hasLinkCode"
      />
      <q-btn
        flat
        no-caps
        color="primary-color"
        text-color="secondary-color"
        :label="t('common.viewProject')"
        :href="linkProject"
        target="_blank"
        rel="noopener noreferrer"
        class="text-weight-medium"
        v-if="hasLinkProject"
      />
    </q-card-actions>
  </q-card>
</template>
