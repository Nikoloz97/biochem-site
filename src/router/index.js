import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/Home'
import Status from '@/views/StatusExam'
import FlashCards from '@/views/Flashcards'
import Planner from '@/views/Planner'
import Content from '@/views/Content'
import HowTo from '@/views/HowTo'

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
      {
        path: '/content',
        name: 'Content',
        component: Content
      },
      {
        path:'/how-to',
        name: 'How-to',
        component: HowTo
      }

  ]

})

export default router