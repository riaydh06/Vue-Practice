import Vue from 'vue'
import App from './App.vue'
import {store} from './store'

//Vue.component('my-component', require('./components/MyComponent.vue'))

new Vue({
  el: '#app',
    store,
    render: h => h(App)
})
