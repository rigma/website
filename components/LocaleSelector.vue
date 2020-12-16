<template>
  <form>
    <label for="locale-select">
      {{ $t('label') }}
    </label>
    <select id="locale-select" v-model="locale">
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

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { SUPPORTED_DIALECTS } from '@/plugins/vue-i18n'

export default Vue.extend({
  name: 'LocaleSelector',
  computed: {
    dialects () {
      return SUPPORTED_DIALECTS
    },
    locale: {
      get () {
        return this.$store.state.i18n.locale
      },
      set (value) {
        this.$store.dispatch('i18n/updateLocale', value)
      }
    }
  }
})
</script>

<style scoped>
label {
  font-size: .75em;
}
</style>
