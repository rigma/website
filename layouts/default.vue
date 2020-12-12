<template>
  <div class="container">
    <Navbar />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar
  }
})
</script>

<style>
@import '~/assets/css/colors.css';

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

h1, h2, h3, h4, h5, h6 {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  color: var(--title-color);
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.6em
}

h3 {
  font-size: 1.4em;
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
