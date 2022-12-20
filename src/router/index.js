import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomeScreen from '@/views/WelcomeScreen'
import PreTest from '@/views/Pre-Test'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
        path: '/',
        name: 'Welcome', 
        component: WelcomeScreen
      },
      {
        path: '/pretest',
        name: 'Pretest',
        component: PreTest
      },
  ]

})

export default router