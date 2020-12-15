<template>
  <nav>
    <h1 class="title">
      <nuxt-link to="/">
        rigma's lair
      </nuxt-link>
    </h1>
    <ul class="links">
      <li>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/resume">
          Resume
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar'
})
</script>

<style scoped>
@import '~/assets/css/colors.css';

nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 12px;
}

nav a {
  color: var(--link-color);
  text-decoration: none;
}

.title {
  margin-right: 16px;
}

.title a {
  color: var(--title-color);
  text-decoration: none;
}

.links {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 8px;
  padding: 0;
}

.links li {
  list-style: none;
  padding: 0 8px;
}

.links a {
  text-decoration: none;
}

.links a:hover {
  filter: brightness(.25);
}

.links a.nuxt-link-exact-active {
  text-decoration: underline dotted;
}
</style>
