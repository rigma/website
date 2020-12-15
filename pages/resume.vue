<template>
  <article>
    <WorkInProgress />
  </article>
</template>

<script>
import WorkInProgress from '@/components/WorkInProgress.vue'

export default {
  components: {
    WorkInProgress
  }
}
</script>

<style scoped>
article {
  text-align: center;
}

.italic {
  font-style: italic;
}
</style>
