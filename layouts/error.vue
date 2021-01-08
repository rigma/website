<template>
  <article>
    <section v-if="badRequest">
      <h1>
        🤬
        <br />
        {{ $t('titles.badRequest') }}
        <small>{{ $t('messages.badRequest') }}</small>
      </h1>
    </section>
    <section v-else-if="unauthorized">
      <h1>
        👮‍♂️
        <br />
        {{ $t('titles.unauthorized') }}
        <small>{{ $t('messages.unauthorized') }}</small>
      </h1>
    </section>
    <section v-else-if="forbidden">
      <h1>
        ⛔️
        <br />
        {{ $t('titles.forbidden') }}
        <small>{{ $t('messages.forbidden') }}</small>
      </h1>
    </section>
    <section v-else-if="notFound">
      <h1>
        🤷‍♂️
        <br />
        {{ $t('titles.notFound') }}
        <small>{{ $t('messages.notFound') }}</small>
      </h1>
    </section>
    <section v-else>
      <h1>
        💀
        <br />
        {{ $t('titles.default') }}
        <small>{{ $t('messages.default') }}</small>
      </h1>
    </section>
  </article>
</template>

<i18n>
{
  "en": {
    "titles": {
      "badRequest": "You made a bad request!",
      "unauthorized": "Paper please!",
      "forbidden": "You shall not pass!",
      "notFound": "Page not found",
      "default": "An error occured"
    },
    "messages": {
      "badRequest": "Next time try not to be wrong 🙈",
      "unauthorized": "Are you sure that you have the right visa? 🧐",
      "forbidden": "Your dark request will not prevail, flame of Udûn!",
      "notFound": "Are you lost stranger?",
      "default": "But the website is fine… I think…"
    }
  },
  "fr": {
    "titles": {
      "badRequest": "Vous avez fait une mauvaise requête",
      "unauthorized": "Vos papiers s'il vous plaît !",
      "forbidden": "Vous ne passerez pas !",
      "notFound": "La page est introuvable",
      "default": "Une erreur est survenue…"
    },
    "messages": {
      "badRequest": "Ne vous trompez pas la prochaine fois 🙈",
      "unauthorized": "Êtes-vous sûr d'avoir le bon visa ? 🧐",
      "forbidden": "Votre sombre requête ne vous servira à rien, flamme d'Udûn !",
      "notFound": "Êtes-vous perdu étranger ?",
      "default": "Mais le site va bien lui… Enfin, je crois…"
    }
  }
}
</i18n>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  props: ['error'],
  layout: 'error',
  computed: {
    badRequest () {
      return this.error.statusCode === 400 || false
    },
    unauthorized () {
      return this.error.statusCode === 401 || false
    },
    forbidden () {
      return this.error.statusCode === 403 || false
    },
    notFound () {
      return this.error.statusCode === 404 || false
    }
  },
  components: {
    Navbar
  }
}
</script>

<style scoped>
@import '~/assets/css/typography.css';

section {
  display: flex;
  justify-content: center;
}

h1 {
  display: inline-flex;
  flex-direction: column;
  font-size: 3em;
  text-align: center;
}

h1 small {
  font-family: var(--text-font-family);
  font-size: 1.5rem;
  padding-top: 20px;
}

@media (min-width: 480px) {
  h1 {
    font-size: 4em;
  }
}

@media (min-width: 768px) {
  h1 {
    font-size: 6em;
  }
}
</style>
