import Vue from 'vue';
import Router from 'vue-router';

import App from '@/App.vue';

Vue.use(Router)

export default new Router({
  mode  : 'history',
  base  : '/',
  routes: [
    {
      name     : 'root', 
      path     : '/', 
      component: App, 
      redirect : 'join',
      children : [
        {
          path: 'join',
          name: 'join',
          component: () => import('@/page/Join.vue')
        },
        {
          path: 'zoom',
          name: 'zoom',
          component: () => import('@/page/Zoom.vue')      
        },
        {
          path: 'zoomIframe',
          name: 'zoomIframe',
          component: () => import('@/page/ZoomIframe.vue')      
        },
        {
          path: 'fixedZoom',
          name: 'fixedZoom',
          component: () => import('@/page/FixedZoom.vue')      
        },
        {
          path: 'fixedZoomIframe',
          name: 'fixedZoomIframe',
          component: () => import('@/page/FixedZoomIframe.vue')      
        },
      ]
    },
    
    { path: '*', redirect: '/' }    
  ]
})
