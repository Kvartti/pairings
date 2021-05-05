import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import SecondCharacter from '../views/SecondTemplate.vue'
import Result from '../views/Result.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },{
    path: '/',
    name: 'Pairings',
    component: () => import('../views/Pairings.vue')
  },{
    path: '/:id',
    name: 'Second',
    component: SecondCharacter,
  },{
    path: '/:name/:second',
    name: 'Result',
    component: Result,
  },/*{
    path: '/:id',
    name: 'Second-character',
    component: () => import('../views/second-character/Testi.vue')
  },{
    path: '/:id',
    name: 'Testi',
    component: () => import('../views/second-character/Testi.vue')
  },*/
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
