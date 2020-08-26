import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
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
    component:()=> import('@/views/Home'),
    children:[
      {
        path: 'wallet',
        name:'wallet',
        component:()=> import('../views/Home/Wallet')
      },
      {
        path: 'explore',
        name:'explore',
        component:()=> import('../views/Home/Explore')
      },
      {
        path: 'market',
        name:'market',
        component:()=> import('../views/Home/Market')
      },
    ]
  },
  {
    path:'/home/wallet/:id',
    name:'coinInfo',
    component:()=> import('@/views/Home/Wallet/id')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  let token = VueCookies.get('token')
  console.log(token)
  if (to.name !== 'login' && !token) next({ name: 'login' })
  else next()
})

export default router
