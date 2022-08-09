import Vue from 'vue'
import VueRouter from 'vue-router'
import ExploreView from '@/views/ExploreView.vue'
import GroupView from '@/views/GroupView.vue'
import GroupCreateView from '@/views/GroupCreateView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ProjectCreateView from '@/views/ProjectCreateView.vue'
import SignupView from '@/views/SignupView.vue'
import SigninView from '@/views/SigninView.vue'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signin',
    component: SigninView
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExploreView
  },
  {
    path: '/group',
    name: 'group',
    component: GroupView
  },
  {
    path: '/group/create',
    name: 'groupCreate',
    component: GroupCreateView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/project/create',
    name: 'projectCreate',
    component: ProjectCreateView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function (to, from, next) {
  axios({
    method: 'get',
    url: '/api/user',
    baseURL: 'http://localhost:9091',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      Accept: '/'
    },
    withCredentials: true
  })
    .then((response) => {
      const userInfo = response.data
      Vue.$cookies.set('JSESSIONID', userInfo.sessionId)
      sessionStorage.setItem('user', JSON.stringify(userInfo))

      if (to.path === '/') {
        if (userInfo.id === null) {
          next()
        } else {
          next({
            path: '/explore',
            replace: true
          })
        }
      } else if (to.path === '/signup') {
        next()
      } else if (userInfo.id === null) {
        next({
          path: '/',
          replace: true
        })
      } else {
        next()
      }
    })
    .catch((error) => {
      const data = error.response.data
      data.status = error.response.status
      console.error(data)

      next({
        path: '/',
        replace: true
      })
    })
})

export default router
