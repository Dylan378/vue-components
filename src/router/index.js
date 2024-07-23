import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SmoothScroling from '../views/SmoothScroling.vue'
import ContextMenus from '@/views/ContextMenus.vue'
import ConditionalVisibility from '@/views/ConditionalVisibility.vue'
import Modal from '@/views/Modal.vue'
import Toasters from '@/views/Toasters.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/smooth-scroling',
      name: 'smooth-scroling',
      component: SmoothScroling
    },
    {
      path: '/context-menus',
      name: 'context-menus',
      component: ContextMenus
    },
    {
      path: '/conditional-visibility',
      name: 'conditional-visibility',
      component: ConditionalVisibility
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal
    },
    {
      path: '/toasters',
      name: 'toasters',
      component: Toasters
    },
  ]
})

export default router
