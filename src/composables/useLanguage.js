import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from 'src/stores/languageStore'
import { Lang } from 'quasar'

const quasarLangModules = import.meta.glob('../../node_modules/quasar/lang/(en-US|pt-BR).js')

const languageOptions = [
  { label: 'English', value: 'en-US' },
  { label: 'Português', value: 'pt-BR' },
]

export function useLanguage() {
  const store = useLanguageStore()
  const current = ref(store.language)
  const { locale } = useI18n({ useScope: 'global' })

  async function setLanguage(lang) {
    const modKey = `../../node_modules/quasar/lang/${lang}.js`
    const loader = quasarLangModules[modKey]
    if (loader) {
      const mod = await loader()
      Lang.set(mod.default)
    }

    locale.value = lang

    store.language = lang
    current.value = lang
    localStorage.setItem('language', lang)
  }

  onMounted(() => {
    setLanguage(store.language)
  })

  return {
    languageOptions,
    currentLanguage: current,
    setLanguage,
  }
}
