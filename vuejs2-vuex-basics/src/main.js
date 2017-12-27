import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Router from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: Router
})

new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
