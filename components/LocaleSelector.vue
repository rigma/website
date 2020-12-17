<template>
  <form>
    <label for="locale-select">
      {{ $t('label') }}
    </label>
    <select id="locale-select" @change="selectLocale" :value="locale">
      <option v-for="(dialect, idx) in dialects"
        :key="`dialect-${idx}`"
        :value="dialect.locale"
      >
        {{ dialect.name }}
      </option>
    </select>
  </form>
</template>

<i18n>
{
  "en": {
    "label": "Language: "
  },
  "fr": {
    "label": "Langue :"
  }
}
</i18n>

<script>
import { mapState } from 'vuex'
import { SUPPORTED_DIALECTS } from '@/plugins/vue-i18n'

export default {
  name: 'LocaleSelector',
  computed: {
    dialects () {
      return SUPPORTED_DIALECTS
    },
    ...mapState({
      locale: state => state.i18n.locale
    })
  },
  methods: {
    selectLocale (event) {
      const currentLocale = this.$store.getters['i18n/getCurrentLocale']()
      const locale = event.target.value

      if (currentLocale === locale) {
        return
      }

      const currentPath = this.$route.fullPath
      if (currentLocale === this.$i18n.fallbackLocale) {
        return this.$router.push({
          path: `/${locale}${currentPath}`
        })
      }

      this.$router.push({
        path: `/${locale}${currentPath.slice(currentPath.indexOf(`/${currentLocale}`.length))}`
      })
    }
  }
}
</script>

<style scoped>
label {
  font-size: .75em;
}
</style>
