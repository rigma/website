import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBug, faCode, faTerminal } from '@fortawesome/free-solid-svg-icons'
import Vue from 'vue'

config.autoAddCss = false
library.add(faBug, faCode, faTerminal)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

export { library } from '@fortawesome/fontawesome-svg-core'
