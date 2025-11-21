import { defineBoot } from '#q-app/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import { useLanguageStore } from 'src/stores/languageStore'
import { Lang } from 'quasar'

export default defineBoot(({ app }) => {
  const store = useLanguageStore()
  const i18n = createI18n({
    locale: store.language || localStorage.getItem('language') || Lang.getLocale(),
    globalInjection: true,
    messages,
  })

  // Set i18n instance on app
  app.use(i18n)
})
