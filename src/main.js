import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ButtomMain from './components/ButtomMain.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ButtomHover from './components/ButtomHover.vue'
import {
  faBars,
  faAnglesUp,
  faLocationDot,
  faGlobe,
  faArrowRight,
  faArrowLeft,
  faEye,
  faLeaf,
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons'
const app = createApp(App)
library.add(faBars, faGlobe, faAnglesUp, faLocationDot, faArrowRight, faArrowLeft, faEye, faLeaf,faAngleLeft,faAngleRight)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('ButtomMain', ButtomMain)
app.component('ButtomHover', ButtomHover)

app.use(createPinia())
app.use(router)

app.mount('#app')
