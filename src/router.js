import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: Layout,
      children: [{
        path: '',
        name: 'article-content',
        component: () => import('./views/Article.vue')
      }]
    }
  ]
})
