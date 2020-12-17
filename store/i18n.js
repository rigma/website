import Vue from 'vue'
import { LOCALES } from '@/plugins/vue-i18n'

export const state = () => ({
  locale: navigator.language,
})

export const getters = {
  getCurrentLocale: state => () => state.locale
}

export const mutations = {
  setLocale (state, locale) {
    state.locale = locale
  },
  changeI18nLocale (state) {
    this.app.i18n.locale = state.locale
  }
}

export const actions = {
  updateLocale ({ commit, dispatch }, locale) {
    if (!LOCALES.includes(locale)) {
      return
    }

    commit('setLocale', locale)
    commit('changeI18nLocale')
  }
}
