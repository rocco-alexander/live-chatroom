import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '@/firebase/config'

const requireAuth = (to,from,next) =>{
  let user = projectAuth.currentUser
  console.log('current user in auth guard', user )
  if(!user){
    next({name:'home'})
  }else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
