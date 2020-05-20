import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeMain from '../components/home-main'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home-main'
    },
    {
      path: '/home-main',
      component: HomeMain,
      children: [
        {
          path: '/news-list',
          component: () => import('../components/contributor/news-list.vue')
        }
      ]
    },
    {
      path: '/person-info',
      component: () => import('../components/person-info')
    }
  ]

const router = new VueRouter({
  routes
})

export default router
