import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'join',
      component: () => import('@/page/Join.vue')
    },
    {
      path: '/zoom',
      name: 'zoom',
      component: () => import('@/page/Zoom.vue')      
    },
    {
      path: '/zoomIframe',
      name: 'zoomIframe',
      component: () => import('@/page/ZoomIframe.vue')      
    }
  ]
})
