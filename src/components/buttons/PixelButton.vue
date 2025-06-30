<script setup>
defineProps({
  buttonSize: {
    type: Object,
    default: () => ({ width: '120px', height: '60px' }),
  },
  colorText: {
    type: String,
    default: '#000000',
  },
  colorBackground: {
    type: String,
    default: '#ffd600',
  },
  colorButton: {
    type: String,
    default: '#ff9800',
  },
  sizeText: {
    type: String,
    default: 'md',
  },
  labelButton: {
    type: String,
    default: 'Pixel Primary',
  },
})
</script>

<template>
  <div class="relative-position" :style="{ width: buttonSize.width, height: buttonSize.height }">
    <div class="pixel-btn2-border" :style="{ backgroundColor: colorBackground }"></div>
    <div
      style="width: 103px; height: 43px; top: 6px; left: 6px"
      :style="{ backgroundColor: colorButton }"
      class="absolute"
    >
      <q-btn class="fit" :label="labelButton" :size="sizeText" flat :style="{ color: colorText }" />
    </div>
  </div>
</template>

<style scoped>
.pixel-btn2-border {
  position: absolute;
  inset: 0;
  mask-image: url('/src/assets/icons/pixel-art/border_square_pxArt5.svg');
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  image-rendering: pixelated;
}
</style>
