<template>
  <article>
    <header>
      <picture class="profile">
        <source type="image/webp" srcset="/rigma.webp" />
        <source type="image/jpeg" srcset="/rigma.jpg" />
        <img src="/rigma.jpg" alt="" />
      </picture>
      <h1>
        👋 Bonjour !
        <small>
          I'm Romain Failla.
        </small>
      </h1>
    </header>
    <section class="content">
      <nuxt-content :document="presentation" />
    </section>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const presentation = await $content('presentation').fetch()

    return { presentation }
  }
}
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

header h1 {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  font-size: 3em;
  font-weight: bold;
  margin-top: 20px;
}

header h1 > small {
  font-size: .75em;
}

header > picture > img {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 100%;
  width: 196px;
}

@media (min-width: 768px) {
  header {
    flex-direction: row;
  }

  header h1 {
    margin-top: 0;
    margin-left: 20px;
  }
}
</style>
