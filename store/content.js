export const state = () => ({
  cache: {}
})

export const getters = {
  get: state => slug => state.cache[slug] || null
}

export const mutations = {
  put (state, { slug, content }) {
    state.cache[slug] = content
  }
}

export const actions = {
  async load ({ commit, rootGetters, state }, slug) {
    // Avoiding to load twice the same content
    if (state.cache[slug]) {
      return
    }

    const locale = rootGetters['i18n/getCurrentLocale']()
    const content = await this.$content(`${locale}/${slug}`).fetch()

    commit('put', { slug, content })
  },
  async updateLocale ({ commit, state }, locale) {
    for (const slug in state.cache) {
      const content = await this.$content(`${locale}/${slug}`).fetch()
      commit('put', { slug, content })
    }
  }
}
