<template>
  <header>
    <picture class="profile">
      <source type="image/webp" srcset="/rigma.webp" />
      <source type="image/jpeg" srcset="/rigma.jpg" />
      <img src="/rigma.jpg" :alt="$t('alt')" />
    </picture>
    <h1>
      👋 Bonjour !
      <small>
        {{ $t('identity') }}
      </small>
    </h1>
  </header>
</template>

<i18n>
{
  "en": {
    "alt": "A photo of myself taken in front of a japanese advertisement panel.",
    "identity": "I'm Romain Failla."
  },
  "fr": {
    "alt": "Une photo de moi prise devant un panneau de publicité japonais.",
    "identity": "Je suis Romain Failla."
  }
}
</i18n>

<script>
export default {
  name: 'ProfileBanner'
}
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
