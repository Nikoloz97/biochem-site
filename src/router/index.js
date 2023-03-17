import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/Home'
import Status from '@/views/StatusExam'
import FlashCards from '@/views/Flashcards'
import Planner from '@/views/Planner'
import Content from '@/views/Content'
import Login from '@/views/UserLogin'
import Profile from '@/views/UserProfile'
import Tutorial from '@/views/Tutorial'

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
        path:'/tutorial',
        name: 'Tutorial',
        component: Tutorial
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      },
  ]

})

export default router