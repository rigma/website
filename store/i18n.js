export const state = () => ({
  locale: 'en',
  locales: ['en', 'fr']
})

export const mutations = {
  setLocale (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

