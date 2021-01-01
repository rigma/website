import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBug, faCode, faDatabase, faTerminal } from '@fortawesome/free-solid-svg-icons'
import {
  faAws,
  faDocker,
  faGitAlt,
  faGithub,
  faJira,
  faJs,
  faLaravel,
  faPython,
  faNode,
  faReact,
  faRust,
  faTrello,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import Vue from 'vue'

config.autoAddCss = false
library.add(
  faAws,
  faBug,
  faCode,
  faDatabase,
  faDocker,
  faGitAlt,
  faGithub,
  faJira,
  faJs,
  faLaravel,
  faPython,
  faNode,
  faReact,
  faRust,
  faTerminal,
  faTrello,
  faVuejs
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

export { library } from '@fortawesome/fontawesome-svg-core'
