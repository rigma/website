<template>
  <section class="experience">
    <div class="layout">
      <div class="timetable">
        <span class="date">{{ start  }}</span> ~ <span class="date">{{ end }}</span>
        <span class="duration mobile">({{ duration }})</span>
        <span class="duration">{{ duration }}</span>
      </div>
      <div class="details">
        <h3>
          <slot name="title" />
        </h3>
        <p>
          <slot name="details">
            <span class="no-details">
              {{ $t('noDetails') }}
            </span>
          </slot>
        </p>
      </div>
    </div>
    <hr v-if="!noSeparator" />
  </section>
</template>

<i18n>
{
  "en": {
    "today": "Today",
    "durationDelimiter": " and ",
    "noDetails": "No further information at the moment…"
  },
  "fr": {
    "today": "Aujourd'hui",
    "durationDelimiter": " et ",
    "noDetails": "Pas de description pour le moment…"
  }
}
</i18n>

<script>
import { format, formatDuration, intervalToDuration, parse } from 'date-fns'
import { fr } from 'date-fns/locale'

export default {
  name: 'Experience',
  props: {
    from: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: undefined
    },
    'no-separator': {
      type: Boolean,
      default: false
    }
  },
  computed: {
    start () {
      const date = parse(this.from, 'yyyy-MM-dd', new Date())
      return format(date, 'LLLL Y', { locale: this.$i18n.locale === 'fr' ? fr : undefined })
    },
    end () {
      if (!this.to) {
        return this.$t('today')
      }

      const date = parse(this.to, 'yyyy-MM-dd', new Date())
      return format(date, 'MMMM Y', { locale: this.$i18n.locale === 'fr' ? fr : undefined })
    },
    duration () {
      const duration = intervalToDuration({
        start: parse(this.from, 'yyyy-MM-dd', new Date()),
        end: this.to ? parse(this.to, 'yyyy-MM-dd', new Date()) : new Date()
      })

      return formatDuration(duration, {
        format: ['years', 'months'],
        delimiter: this.$t('durationDelimiter'),
        locale: this.$i18n.locale === 'fr' ? fr : undefined
      })
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
  margin: 8px 0;
  padding-bottom: 8px;
}

.layout {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  width: 100%;
}

.timetable {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 64px;
}

.timetable .date {
  color: var(--title-color);
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: .7em;
  font-weight: bold;
  text-transform: capitalize;
}

.timetable .date:nth-child(2) {
  margin-bottom: 4px;
}

.timetable .duration {
  color: var(--title-color);
  font-size: .5em;
}

.timetable .duration {
  display: none;
}

.timetable .duration.mobile {
  display: inline;
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

.details .no-details {
  font-style: italic;
}

hr {
  border: none;
  border-bottom: dashed 1px var(--text-color);
  width: 72px;
}

@media (min-width: 768px) {
  .timetable {
    min-width: 128px;
  }

  .timetable .duration {
    display: inline;
    font-size: .75em;
  }

  .timetable .duration.mobile {
    display: none;
  }
}
</style>
