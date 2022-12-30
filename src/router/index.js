import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/Home'
import Status from '@/views/Status'
import FlashCards from '@/views/Flash'
import Planner from '@/views/Planner'

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
        path: '/statusExam',
        name: 'Status',
        component: Status
      },
      {
        path: '/flashcards',
        name: 'Flashcards',
        component: FlashCards
      },
      {
        path: '/planner',
        name: 'Planner',
        component: Planner
      },
  ]

})

export default router