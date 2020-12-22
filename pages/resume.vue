<template>
  <article>
    <nuxt-content v-if="document" :document="document" />
    <WorkInProgress v-else />
  </article>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async middleware ({ store }) {
    await store.dispatch('content/load', 'resume')
  },
  computed: mapState({
    document: state => state.content.cache['resume']
  })
}
</script>

<style>
.nuxt-content h2 {
  padding-bottom: 8px;
}
</style>
