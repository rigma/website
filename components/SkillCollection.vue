<template>
  <section class="skill-collection">
    <form role="search" :aria-label="$t('search.ariaLabel')">
      <div class="search-group">
        <label for="input-search" :class="{ notched }">
          {{ $t('search.label')}}
        </label>
        <input id="input-search"
          type="search"
          autocorrect="false"
          autocomplete="false"
          v-model="query"
          @blur="onBlur"
          @focus="onFocus"
        />
      </div>
    </form>
    <div v-if="filteredSkills.length > 0" class="collection">
      <Skill v-for="skill of filteredSkills"
        :key="`skill-${skill.id}`"
        :id="skill.id"
        :title="skill.title"
        :kind="skill.kind || null"
      />
    </div>
    <div v-else class="no-skills">
      <div class="emoji">
        🤷‍♂️
      </div>
      <p>
        {{ $t('search.nothing') }}
      </p>
    </div>
  </section>
</template>

<i18n>
{
  "en": {
    "search": {
      "ariaLabel": "Search for a skill in the collection",
      "label": "Filter the skill list",
      "nothing": "I do not have this skill yet!"
    }
  },
  "fr": {
    "search": {
      "ariaLabel": "Rechercher une compétence parmis la collection",
      "label": "Filtrer la liste des compétences",
      "nothing": "Je n'ai pas encore cette compétence !"
    }
  }
}
</i18n>

<script>
import debounce from 'lodash-es/debounce'
import { filter } from '@/utils/fuzzy'
import Skill from './Skill.vue'

export default {
  name: 'SkillCollection',
  props: {
    skills: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      filter: undefined,
      notched: false,
      query: null
    }
  },
  computed: {
    filteredSkills () {
      if (!this.filter) {
        return this.skills
      }

      const skills = this.skills.map(skill => skill.title)

      return filter(this.filter, skills)
        .map(match => this.skills[match.idx])
    }
  },
  watch: {
    query (_current, _previous) {
      this.debouncedOnFilterChange()
    }
  },
  created () {
    this.debouncedOnFilterChange = debounce(this.onFilterChange, 250)
  },
  methods: {
    onFilterChange () {
      if (!this.query) {
        this.filter = undefined
        return
      }

      this.filter = this.query
    },
    onBlur () {
      this.notched = this.query !== null && this.query !== ''
    },
    onFocus () {
      this.notched = true
    }
  },
  components: {
    Skill
  }
}
</script>

<style scoped>
@import '~/assets/css/colors.css';
@import '~/assets/css/typography.css';

section {
  display: flex;
  flex-direction: column;
}

.search-group {
  position: relative;
  margin-bottom: 12px;
}

.search-group input[type="search"] {
  appearance: none;
  background: transparent;
  border: solid 1px var(--border-color);
  border-radius: 3px;
  color: var(--text-color);
  font-family: var(--text-font-family);
  font-size: 1em;
  padding: 10px 14px;
  width: 100%;
  transition: border 150ms cubic-bezier(.4, 0, .2, 1);
}

.search-group input[type="search"]:focus {
  appearance: none;
  border: solid 2px var(--title-color);
  outline: none;
}

.search-group label {
  position: absolute;
  left: 0;
  color: var(--text-color);
  cursor: text;
  overflow: hidden;
  line-height: 1em;
  transform-origin: left top;
  text-align: left;
  text-overflow: ellipsis;
  transform: translate(10px, 14px);
  transition: transform 150ms cubic-bezier(.4, 0, .2, 1),
    background 150ms cubic-bezier(.4, 0, .2, 1),
    color 150ms cubic-bezier(.4, 0, .2, 1);
  will-change: transform;
  white-space: nowrap;
  padding: 0 4px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.search-group label.notched {
  background: var(--background-color);
  color: var(--title-color);
  transform: translate(10px, -6px) scale(.75);
}

.collection {
  display: flex;
  flex-wrap: wrap;
}

.collection > * {
  margin-right: 8px;
}

.collection :last-child {
  margin-right: auto;
}

.no-skills .emoji {
  font-size: 3em;
  text-align: center;
}

.no-skills p {
  font-size: 1.2em;
  font-style: italic;
  text-align: center;
}
</style>
