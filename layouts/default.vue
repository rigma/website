<template>
  <div class="container">
    <Navbar />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  head () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
@import '~/assets/css/colors.css';
@import '~/assets/css/typography.css';

html {
  background-color: var(--background-color);
  font-family: 'Gelasio', 'Times New Roman', Times, serif;
  font-size: 16px;
  color: var(--text-color);
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  min-height: 100vh;
  margin: 0 auto;
}

.container > main {
  padding: 0 12px;
  margin-top: 32px;
}

@media (min-width: 480px) {
  .container {
    min-width: 480px;
  }

  .container > main {
    margin-top: 48px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }

  .container > main {
    margin-top: 64px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
</style>
