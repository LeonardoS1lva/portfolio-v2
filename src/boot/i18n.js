import { defineBoot } from '#q-app/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import { Lang } from 'quasar'

export default defineBoot(({ app }) => {
  const i18n = createI18n({
    locale: Lang.getLocale(),
    globalInjection: true,
    messages,
  })

  // Set i18n instance on app
  app.use(i18n)
})
