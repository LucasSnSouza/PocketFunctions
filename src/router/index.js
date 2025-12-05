import { createRouter, createWebHistory } from 'vue-router'

import SplashScreenView from '../views/SplashScreenView.vue'
import HomeView from '../views/HomeView.vue'
import EnvironmentView from '../views/EnvironmentView.vue'
import MarketView from '../views/MarketView.vue'
import NotesView from '../views/NotesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'interest',
      component: SplashScreenView,
      meta: { header: false, navigation: false }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { title: "titles.home", header: true, navigation: true }
    },
    {
      path: '/environment',
      name: 'environment',
      component: EnvironmentView,
      meta: { title: "titles.environment", header: true, navigation: true }
    },
    {
      path: '/market',
      name: 'market',
      component: MarketView,
      meta: { title: "titles.shopping", header: true, navigation: true }
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesView,
      meta: { title: "titles.notes", header: true, navigation: true }
    },
  ],
})

export default router
