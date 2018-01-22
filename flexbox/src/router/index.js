import Vue from 'vue'
import Router from 'vue-router'
import Aligncontent from '@/components/Align-content'
import Alignitem from '@/components/Align-item'
import Alignself from '@/components/Align-self'
import Home from '@/components/Home'
import All from '@/components/All'
import Animation from '@/components/Animation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Aligncontent',
      name: 'Aligncontent',
      component: Aligncontent
    },
    {
      path: '/Alignitem',
      name: 'Alignitem',
      component: Alignitem
    },
    {
      path: '/Alignself',
      name: 'Alignself',
      component: Alignself
    },
    {
      path: '/All',
      name: 'All',
      component: All
    },
    {
      path: '/Animation',
      name: 'Animation',
      component: Animation
    }
  ],
  mode: 'history'
})
