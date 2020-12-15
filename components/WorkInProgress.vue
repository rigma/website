<template>
  <section>
    🛠🧑‍💻 <span class="italic">{{ $t('message') }}</span>
  </section>
</template>

<i18n>
{
  "en": {
    "message": "Work in progress…"
  },
  "fr": {
    "message": "Développement en cours…"
  }
}
</i18n>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'WorkInProgress'
})
</script>

<style scoped>
section {
  text-align: center;
}

.italic {
  font-style: italic;
}
</style>
