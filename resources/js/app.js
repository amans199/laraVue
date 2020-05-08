// import { loadVueComponentsFromDirectory } from "./shared/utils";

require('./bootstrap');

window.Vue = require('vue');
// import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/dashboard', component: require('./components/Dashboard.vue').default },
  { path: '/profile', component: require('./components/Profile.vue').default }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


const app = new Vue({
  el: '#app',
  router
});
