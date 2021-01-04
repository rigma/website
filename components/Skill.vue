<template>
  <button role="presentation"
    :class="{ active: shouldBeActive, disabled }"
    :disabled="disabled"
    @click="toggle"
  >
    <FontAwesomeIcon :icon="displayIcon" /> {{ title }}
  </button>
</template>

<script>
import { mapState } from 'vuex'
import { library } from '@/plugins/fontawesome'

function randomIcon () {
  return ['code', 'terminal', 'bug'][Math.floor(3 * Math.random())]
}

export default {
  name: 'Skill',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: [String, Array],
      default: undefined
    },
    kind: {
      type: String,
      default: undefined,
      validate (value) {
        return ['code', 'devops', 'fun'].indexOf(value) !== -1
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    displayIcon () {
      if (this.icon) {
        return this.icon
      }

      if (!library.definitions.fab || Object.keys(library.definitions.fab).indexOf(this.id) === -1) {
        switch (this.getKind()) {
          case 'code':
            return ['fas', 'code']
          case 'devops':
            return ['fas', 'terminal']
          case 'fun':
            return ['fas', 'bug']
          default:
            return ['fas', randomIcon()]
        }
      }

      return ['fab', this.id]
    },
    ...mapState({
      shouldBeActive (state) {
        return this.active || state.skills.selected.indexOf(this.id) !== -1
      }
    })
  },
  created () {
    if (this.disabled) {
      return
    }
    
    this.active = this.$store.state.skills.selected.indexOf(this.id) !== -1
  },
  methods: {
    getKind () {
      if (this.kind) {
        return this.kind
      }

      return ['code', 'devops', 'fun'][Math.floor(3 * Math.random())]
    },
    toggle () {
      if (this.disabled) {
        return
      }

      this.active = !this.active
      if (this.active) {
        this.$store.commit('skills/select', this.id)
      } else {
        this.$store.commit('skills/unselect', this.id)
      }
    }
  }
}
</script>

<style scoped>
@import '~/assets/css/colors.css';
@import '~/assets/css/typography.css';

button {
  appearance: none;
  background: none;
  border: solid 1px var(--border-color);
  border-radius: 3px;
  box-shadow: none;
  cursor: pointer;
  color: var(--title-color);
  font-family: var(--text-font-family);
  font-size: 1em;
  padding: 6px;
  transition: all 200ms ease-out;
}

button:active, button.active, button:active + button.active {
  background: #555;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #fff;
}

button.disabled {
  cursor: auto;
}
</style>
