<template>
  <article>
    <ProfileBanner />
    <nuxt-content v-if="document" :document="document" />
    <WorkInProgress v-else />
  </article>
</template>

<script>
import { mapState } from 'vuex'
import ProfileBanner from '@/components/ProfileBanner.vue'
import WorkInProgress from '@/components/WorkInProgress.vue'

export default {
  async middleware ({ store }) {
    await store.dispatch('content/load', 'presentation')
  },
  computed: mapState({
    document: state => state.content.cache['presentation']
  }),
  components: {
    ProfileBanner,
    WorkInProgress
  }
}
</script>

<style scoped>
@import '~/assets/css/typography.css';

header {
  margin-bottom: 30px;
}
</style>
