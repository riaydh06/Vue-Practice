import Vue from 'vue'
import App from './App.vue'
Vue.filter('to_uppercase',function(value){
  return value.toUpperCase();
})
Vue.filter('snipped',function(value){
    return value.slice(0,3);
})

new Vue({
  el: '#app',
  render: h => h(App)
})
