<template>
  <article>
    <ProfileBanner />
    <section v-if="presentation" class="content">
      <nuxt-content :document="presentation" />
    </section>
    <WorkInProgress v-else />
  </article>
</template>

<script>
import ProfileBanner from '@/components/ProfileBanner.vue'
import WorkInProgress from '@/components/WorkInProgress.vue'

export default {
  async asyncData ({ app, $content }) {
    const locale = app.store.state.i18n.locale
    let presentation

    try {
      presentation = await $content(`${locale}/presentation`).fetch()
    } catch (err) {
      presentation = null
    }

    return { presentation }
  },
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
