import { defineStore } from 'pinia'

export const useThemeStore = defineStore('themeStore', {
  state: () => ({
    theme: localStorage.getItem('theme') || 'light',
  }),
})
