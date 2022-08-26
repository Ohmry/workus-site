import Vue from 'vue'
import VueRouter from 'vue-router'
import OverView from '@/views/personal/OverView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ProjectListView from '@/views/project/ProjectListView.vue'
import ProjectCreateView from '@/views/project/ProjectCreateView.vue'
import ProjectDetailView from '@/views/project/ProjectDetailView.vue'
import SignupView from '@/views/SignupView.vue'
import SigninView from '@/views/SigninView.vue'
import ServerErrorView from '@/views/common/ServerErrorView.vue'
import NotFoundView from '@/views/common/NotFoundView.vue'
import ListView from '@/views/personal/ListView.vue'
import BoardView from '@/views/personal/BoardView.vue'
import TimelineView from '@/views/personal/TimelineView.vue'
import PersonalView from '@/views/PersonalView.vue'
import WorkSpaceView from '@/views/WorkSpaceView.vue'
import WorkSpaceDetailView from '@/views/workspace/WorkSpaceDetailView.vue'
import WorkSpaceListView from '@/views/workspace/WorkSpaceListView.vue'
import WorkSpaceCreateView from '@/views/workspace/WorkSpaceCreateView.vue'
import IssueView from '@/views/IssueView.vue'
import IssueListView from '@/views/issue/IssueListView.vue'
import IssueCreateView from '@/views/issue/IssueCreateView.vue'
import IssueDetailView from '@/views/issue/IssueDetailView.vue'
// import api from '@/modules/api'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/personal'
  },
  {
    path: '/personal',
    redirect: '/personal/overview',
    component: PersonalView,
    children: [
      {
        path: '/personal/overview',
        component: OverView
      },
      {
        path: '/personal/list',
        component: ListView
      },
      {
        path: '/personal/board',
        component: BoardView
      },
      {
        path: '/personal/timeline',
        component: TimelineView
      }
    ]
  },
  {
    path: '/workspace',
    component: WorkSpaceView,
    children: [
      {
        path: '/',
        component: WorkSpaceListView
      },
      {
        path: '/workspace/create',
        component: WorkSpaceCreateView
      },
      {
        path: '/workspace/:id(\\d+)',
        component: WorkSpaceDetailView
      }
    ]
  },
  {
    path: '/project',
    component: ProjectView,
    children: [
      {
        path: '/',
        component: ProjectListView
      },
      {
        path: '/project/create',
        component: ProjectCreateView
      },
      {
        path: '/project/:id(\\d+)',
        component: ProjectDetailView
      }
    ]
  },
  {
    path: '/issue',
    component: IssueView,
    children: [
      {
        path: '/',
        component: IssueListView
      },
      {
        path: '/issue/create',
        component: IssueCreateView
      },
      {
        path: '/issue/:id(\\d+)',
        component: IssueDetailView
      }
    ]
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
  next()
  // const route = routes.find((route) => route.path === to.path)
  // if (route === undefined) {
  //   next({
  //     path: '/404',
  //     replace: false
  //   })
  //   return
  // }

  // if (
  //   to.path === '/error' ||
  //   to.path === '/signup' ||
  //   to.path === '/signin' ||
  //   to.path === '/404'
  // ) {
  //   next()
  //   return
  // }

  // api
  //   .get('/api/user')
  //   .then((response) => {
  //     const userInfo = response.data
  //     Vue.$cookies.set('JSESSIONID', userInfo.sessionId)
  //     sessionStorage.setItem('user', JSON.stringify(userInfo))
  //     if (userInfo.id === null) {
  //       next({
  //         path: '/signin',
  //         replace: true
  //       })
  //     } else {
  //       next()
  //     }
  //   })
  //   .catch((err) => {
  //     console.error(err)
  //     next({
  //       path: '/error',
  //       replace: true
  //     })
  //   })
})

export default router
