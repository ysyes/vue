import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import About from '@/components/about/about'
import News from '@/components/about/news'
import Partner from '@/components/about/partner'
import Sever from '@/components/tameSever/tameSever'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/partner',
      name: 'Partner',
      component: Partner
    },
    {
      path: '/sever',
      name: 'Sever',
      component: Sever
    }
  ]
})
