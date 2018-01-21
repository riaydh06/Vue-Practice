import Vue from 'vue'
import Router from 'vue-router'
import Aligncontent from '@/components/Align-content'
import Alignitem from '@/components/Align-item'
import Alignself from '@/components/Align-self'
import Home from '@/components/Home'

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
    }
  ],
  mode: 'history'
})
