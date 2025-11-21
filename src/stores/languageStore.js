import { defineStore } from 'pinia'
import { Lang } from 'quasar'

export const useLanguageStore = defineStore('languageStore', {
  state: () => ({
    language: localStorage.getItem('language') || Lang.getLocale(),
  }),
})
