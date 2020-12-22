<template>
  <section class="formation" :class="{ 'no-separator': noSeparator }">
    <div class="layout">
      <div class="graduation-date">
        <span class="date">{{ beginningDate || graduationDate }}</span>
        <span v-if="beginningDate">~</span>
        <span v-if="beginningDate" class="date">{{ graduationDate }}</span>
      </div>
      <div class="details">
        <h3>
          {{ title }}
        </h3>
        <p v-if="details">
          {{ details }}
        </p>
      </div>
    </div>
    <hr v-if="!noSeparator" />
  </section>
</template>

<script>
import { format, parse } from 'date-fns'
import { fr } from 'date-fns/locale'

export default {
  name: 'Formation',
  props: {
    start: {
      type: String,
      default: undefined
    },
    end: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    details: {
      type: String,
      default: undefined
    },
    'no-separator': {
      type: Boolean,
      default: false
    }
  },
  computed: {
    beginningDate () {
      if (!this.start) {
        return undefined
      }

      const date = parse(this.start, 'yyyy-MM-dd', new Date())
      return format(date, 'Y', { locale: this.$i18n.locale === 'fr' ? fr : undefined })
    },
    graduationDate () {
      const date = parse(this.end, 'yyyy-MM-dd', new Date())
      return format(date, 'Y', { locale: this.$i18n.locale === 'fr' ? fr : undefined })
    }
  }
}
</script>

<style scoped>
@import '~/assets/css/colors.css';

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px 0;
  padding-bottom: 8px;
}

section.no-separator {
  border-bottom: none;
}

.layout {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  width: 100%;
}

.graduation-date {
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  text-align: center;
  min-width: 64px;
}

.graduation-date .date {
  color: var(--title-color);
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: .7em;
  font-weight: bold;
  text-transform: uppercase;
}

.details {
  padding-left: 12px;
}

.details h3 {
  font-size: 1.2em;
  margin-bottom: 6px;
}

.details p {
  text-align: left;
  padding: 0;
}

hr {
  border: none;
  border-bottom: dashed 1px var(--text-color);
  width: 72px;
}

@media (min-width: 768px) {
  .graduation-date {
    min-width: 128px;
  }
}
</style>
