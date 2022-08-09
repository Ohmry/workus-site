import Vue from 'vue'
import VueRouter from 'vue-router'
import ExploreView from '@/views/ExploreView.vue'
import GroupView from '@/views/GroupView.vue'
import GroupCreateView from '@/views/GroupCreateView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ProjectCreateView from '@/views/ProjectCreateView.vue'
import SignupView from '@/views/SignupView.vue'
import SigninView from '@/views/SigninView.vue'
import ServerErrorView from '@/views/ServerErrorView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import api from '@/modules/api'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninView
  },
  {
    path: '/error',
    name: 'error',
    component: ServerErrorView
  },
  {
    path: '/404',
    name: 'notFound',
    component: NotFoundView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function (to, from, next) {
  const route = routes.find(route => route.path === to.path)
  if (route === undefined) {
    next({
      path: '/404',
      replace: true
    })
  }
  if (to.path === '/error' || to.path === '/signup' || to.path === '/signin') {
    next()
  } else {
    api
      .get('/api/user')
      .then(response => {
        const userInfo = response.data
        Vue.$cookies.set('JSESSIONID', userInfo.sessionId)
        sessionStorage.setItem('user', JSON.stringify(userInfo))
        if (userInfo.id === null) {
          next({
            path: '/signin',
            replace: true
          })
        } else {
          next()
        }
      })
      .catch(err => {
        console.error(err)
        next({
          path: '/error',
          replace: true
        })
      })
  }
})

export default router
