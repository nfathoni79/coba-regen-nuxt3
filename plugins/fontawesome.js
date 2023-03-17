import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faYoutube, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(faYoutube, faInstagram, faLinkedin, faFacebook)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon, {})
})