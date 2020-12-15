<template>
  <footer>
    <i18n path="note" tag="p">
      <a href="https://nuxtjs.org" target="_blank">{{ $t('nuxt') }}</a>
    </i18n>
    <LocaleSelector />
  </footer>
</template>

<i18n>
{
  "en": {
    "note": "Made with 🥞 and {0}",
    "nuxt": "Nuxt.js"
  },
  "fr": {
    "note": "Fais avec des 🥞 et {0}",
    "nuxt": "Nuxt.js"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'
import LocaleSelector from './LocaleSelector.vue'

export default Vue.extend({
  name: 'Footer',
  components: {
    LocaleSelector
  }
})
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
}
</style>
