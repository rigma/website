<template>
  <footer>
    <i18n path="note" tag="p">
      <a href="https://nuxtjs.org" target="_blank">{{ $t('nuxt') }}</a>
    </i18n>
    <form>
      <select>
        <option>a</option>
        <option>b</option>
      </select>
      <button>submit</button>
    </form>
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

export default Vue.extend({
  name: 'Footer'
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
