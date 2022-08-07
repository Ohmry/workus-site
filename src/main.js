import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import api from '@/modules/api'
import 'noto-sans-kr/styles.css'
import 'normalize.css'
import './components/installer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faShapes,
  faPlus,
  faCirclePlus,
  faFan,
  faMagnifyingGlass,
  faUserTie,
  faBuilding,
  faCaretRight,
  faBell,
  faCube
} from '@fortawesome/free-solid-svg-icons'

import {
  faUser,
  faKeyboard
} from '@fortawesome/free-regular-svg-icons'

library.add(
  faShapes,
  faPlus,
  faCirclePlus,
  faFan,
  faMagnifyingGlass,
  faUserTie,
  faBuilding,
  faCaretRight,
  faBell,
  faCube
)

library.add(
  faUser,
  faKeyboard
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.prototype.$api = api
Vue.prototype.$axios = axios
Vue.prototype.$apiUrl = 'http://localhost:9091'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
