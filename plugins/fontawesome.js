import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

config.autoAddCss = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
