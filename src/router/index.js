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
    baseURL: 'http://172.29.58.175:9091',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      const data = response.data
      data.status = response.status
      console.log(data)
    })
    .catch((error) => {
      const data = error.response.data
      data.status = error.response.status
      console.log(data)
    })

  const userInfo = JSON.parse(sessionStorage.getItem('user'))
  if (to.path === '/') {
    if (userInfo === null) {
      next()
    } else {
      next({
        path: '/explore',
        replace: false
      })
    }
  } else if (to.path === '/signup') {
    next()
  } else if (userInfo === null) {
    next({
      path: '/',
      replace: true
    })
  } else {
    next()
  }
})

export default router
