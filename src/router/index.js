import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import PreTest from '@/views/PreTest'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
        path: '/',
        name: 'Welcome', 
        component: HomeView
      },
      {
        path: '/pretest',
        name: 'Pretest',
        component: PreTest
      },
     
  ]

})

export default router