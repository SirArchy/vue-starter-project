import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
  {
    path: '/elo-calculator',
    name: 'elo-calculator',
    component: () => import(/* webpackChunkName: "elo-calculator" */ '../views/EloCalculatorView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/match-picker',
    name: 'match-picker',
    component: () => import(/* webpackChunkName: "match-picker" */ '../views/MatchPickerView.vue')
  },
  {
    path: '/season-type',
    name: 'season-type',
    component: () => import(/* webpackChunkName: "season-type" */ '../views/SeasonTypeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
