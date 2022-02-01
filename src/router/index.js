import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

window.Event = new Vue()

const routes = [
  // Routes
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/submit-your-work',
    name: 'submit',
    component: () => import('../views/Submission.vue')
  },
  {
    path: '/grant-recipients',
    name: 'grant-recipients',
    component: () => import('../views/Archive.vue')
  },

  // Redirections
  {
    path: '/archive',
    redirect: { name: 'grant-recipients' }
  },
  {
    path: '/submission',
    redirect: { name: 'submit' }
  },
  {
    path: '*',
    redirect: { name: 'home' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
