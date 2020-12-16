import { LOCALES } from '@/plugins/vue-i18n'

export const state = () => ({
  locale: navigator.language,
})

export const mutations = {
  setLocale (state, locale) {
    if (!LOCALES.includes(locale)) {
      return
    }

    state.locale = locale
  }
}
