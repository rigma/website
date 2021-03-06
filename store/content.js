export const state = () => ({
  cache: {}
})

export const getters = {
  get: state => slug => state.cache[slug] || null
}

export const mutations = {
  clear (state) {
    state.cache = {}
  },
  put (state, { slug, content }) {
    state.cache[slug] = content
  }
}

export const actions = {
  clearCache ({ commit }) {
    commit('clear')
  },
  async load ({ commit, rootGetters, state }, slug) {
    // Avoiding to load twice the same content
    if (state.cache[slug]) {
      return
    }

    const locale = rootGetters['i18n/getCurrentLocale']()
    const content = await this.$content(`${locale}/${slug}`).fetch()

    commit('put', { slug, content })
  },
  async refreshCache ({ commit, rootGetters, state }) {
    const locale = rootGetters['i18n/getCurrentLocale']()

    for (const slug in state.cache) {
      const content = await this.$content(`${locale}/${slug}`).fetch()
      commit('put', { slug, content })
    }
  }
}
