import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import api from '@/modules/api'
import 'normalize.css'
import './components/installer'
import VueCookies from 'vue-cookies'

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
  faCube,
  faBookBookmark,
  faUserGroup,
  faFilter
} from '@fortawesome/free-solid-svg-icons'

import {
  faUser,
  faKeyboard,
  faComment,
  faFolder,
  faFile
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
  faCube,
  faBookBookmark,
  faUserGroup,
  faFilter,
  faComment,
  faFolder,
  faFile
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
Vue.prototype.$eventBus = new Vue()

Vue.use(VueCookies)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
