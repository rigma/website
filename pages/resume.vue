<template>
  <article>
    <nuxt-content v-if="document" :document="document" />
    <WorkInProgress v-else />
  </article>
</template>

<script>
import { mapState } from 'vuex'
import WorkInProgress from '@/components/WorkInProgress.vue'

export default {
  async middleware ({ store }) {
    await store.dispatch('content/load', 'resume')
  },
  computed: mapState({
    document: state => state.content.cache['resume']
  }),
  components: {
    WorkInProgress
  }
}
</script>

<style scoped>
</style>
