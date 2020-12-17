<template>
  <nav>
    <h1 class="title">
      <nuxt-link :to="home">
        rigma's lair
      </nuxt-link>
    </h1>
    <ul class="links">
      <li v-for="(link, idx) in links" :key="`link-${idx}`">
        <nuxt-link :to="link.path">
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<i18n>
{
  "en": {
    "links": {
      "home": "Home",
      "resume": "Resume"
    }
  },
  "fr": {
    "links": {
      "home": "Accueil",
      "resume": "CV"
    }
  }
}
</i18n>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      targets: ['home', 'resume']
    }
  },
  computed: {
    home () {
      return this.$i18n.locale === this.$i18n.fallbackLocale ? '/' : `/${this.$i18n.locale}`
    },
    links () {
      return this.targets.map(target => ({
        path: target === 'home' ? this.home : `/${this.$i18n.locale}/${target}`,
        title: this.$t(`links.${target}`)
      }))
    }
  },
}
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

.links a.nuxt-link-exact-active {
  text-decoration: underline dotted;
}
</style>
