import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const LOCALES = ['en', 'fr']
export const SUPPORTED_DIALECTS = [
  {
    locale: 'en',
    name: 'English'
  },
  {
    locale: 'fr',
    name: 'Français'
  }
]

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.i18n.locale,
    fallbackLocale: 'en'
  })
}
