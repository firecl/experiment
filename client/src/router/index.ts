import { createRouter, createWebHashHistory } from 'vue-router'
import { asyncRoute, staticRoute } from '@/config/route.config'

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoute.concat(asyncRoute),
})

export default router
