import { useQuasar } from 'quasar'
import { useThemeStore } from 'src/stores/themeStore'

const themeOptions = [
  { label: 'Claro', value: 'light' },
  { label: 'Escuro', value: 'dark' },
  { label: 'Pixel Art', value: 'pixel-art' },
  { label: 'Black & Yellow', value: 'black-yellow' },
]

export function useTheme() {
  const $q = useQuasar()

  const savedTheme = localStorage.getItem('theme') || 'light'
  changeTheme(savedTheme)

  function changeTheme(theme) {
    for (const option of themeOptions) {
      document.body.classList.remove(`body--${option.value}`)
    }

    if (theme === 'light') {
      $q.dark.set(false)
    } else if (theme === 'dark') {
      $q.dark.set(true)
    } else {
      $q.dark.set(false)
      document.body.classList.add(`body--${theme}`)
    }

    localStorage.setItem('theme', theme)
    useThemeStore().theme = theme
  }

  return { changeTheme, themeOptions }
}
