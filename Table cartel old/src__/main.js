import $ from 'jquery';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import axios from 'axios'
import VueAxios from 'vue-axios'
//import VueResource from 'vue-resource'

import 'onsenui';
// Onsen UI Styling
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');
require('static/assets/css/lightbox.css');
require('static/assets/css/font-awesome.min.css');
require('static/assets/css/normalize.css');
require('static/assets/css/material-design-iconic-font.css');
require('static/assets/css/ionicons.css');
require('static/assets/css/main.css');
require('static/assets/css/styles.css');
require('assets/js/lightbox.js');



import App from './App';

Vue.use(VueOnsen);
//Vue.use(VueResource);
Vue.use(VueAxios, axios)
//Vue.axios.defaults.headers.common['X-WP-Nonce'] = wp_api_vuejs_poc.nonce;


new Vue({
  el: '#app',
  template: '<app></app>',
  components:{App}
});
