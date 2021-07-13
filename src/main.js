import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode, faDatabase, faLaptop, faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCode, faDatabase, faLaptop, faAngleDoubleDown)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(i18n).mount('#app')
