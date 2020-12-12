<template>
  <article>
    <ProfileBanner />
    <section class="content">
      <nuxt-content :document="presentation" />
    </section>
  </article>
</template>

<script>
import ProfileBanner from '@/components/ProfileBanner.vue'

export default {
  async asyncData ({ $content }) {
    const presentation = await $content('presentation').fetch()

    return { presentation }
  },
  components: {
    ProfileBanner
  }
}
</script>

<style scoped>
header {
  margin-bottom: 30px;
}
</style>
