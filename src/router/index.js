import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    redirect: { name: 'home' }
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/Login')
  },
  {
    path: '/apply',
    name:'application',
    component:()=> import('../views/Apply')
  },
  {
    path:'/home',
    name:'home',
    component:()=> import('@/views/Home')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  console.log(sessionStorage.token)
  let isAuthenticated = sessionStorage.token
  if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
  else next()
})

export default router
