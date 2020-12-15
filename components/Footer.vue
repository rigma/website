<template>
  <footer>
    <hr />
    <div class="layout">
      <i18n path="note" tag="p" class="note">
        <a href="https://nuxtjs.org" target="_blank">{{ $t('nuxt') }}</a>
      </i18n>
      <LocaleSelector />
    </div>
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
  flex-direction: column;
  align-items: center;
  width: 100%;
}

hr {
  border: none;
  border-top: solid 1px rgba(148, 148, 148, .4);
  width: 50%;
}

.layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  width: 100%;
}

.note {
  color: #777;
  font-size: .75em;
  font-style: italic;
}

@media (min-width: 480px) {
  hr {
    width: calc(.75 * 50%);
  }
}

@media (min-width: 768px) {
  hr {
    width: calc(50% / 2);
  }
}
</style>
