import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import { userInfo } from 'os';
import User from './views/User.vue'
import UserForm from './views/UserForm.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '/user-form/:id?',
      name: 'user-form',
      component: UserForm

    }
  ]
})
