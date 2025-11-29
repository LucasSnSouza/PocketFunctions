import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EnvironmentView from '../views/EnvironmentView.vue'
import MarketView from '../views/MarketView.vue'
import NotesView from '../views/NotesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: "titles.home" }
    },
    {
      path: '/environment',
      name: 'environment',
      component: EnvironmentView,
      meta: { title: "titles.environment" }
    },
    {
      path: '/market',
      name: 'market',
      component: MarketView,
      meta: { title: "titles.shopping" }
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesView,
      meta: { title: "titles.notes" }
    },
  ],
})

export default router
