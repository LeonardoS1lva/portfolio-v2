<script setup>
import defaultImg from 'src/assets/projects/PlaceholderImg.png'
import { computed } from 'vue'

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
        status: 'Em progresso',
        backgroundColor: 'yellow-3',
        textColor: 'yellow-10',
      }
    case 2:
      return {
        status: 'Concluído',
        backgroundColor: 'green-3',
        textColor: 'green-10',
      }
    case 3:
      return {
        status: 'Pausado',
        backgroundColor: 'red-3',
        textColor: 'red-10',
      }
    default:
      return {
        status: 'Desconhecido',
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
        label="Ver Código"
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
        label="Ver Projeto"
        :href="linkProject"
        target="_blank"
        rel="noopener noreferrer"
        class="text-weight-medium"
        v-if="hasLinkProject"
      />
    </q-card-actions>
  </q-card>
</template>
