import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Main from '@/components/main'
import Case from '@/components/case'
import Contact from '@/components/contact'
import Demo from '@/components/demo'

Vue.use(Router)

export default new Router({
//	base: '/history',
//	mode: 'history',
	routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/case',
      name: 'case',
      component: Case
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    }
  ]
})
