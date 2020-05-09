// import { loadVueComponentsFromDirectory } from "./shared/utils";

require('./bootstrap');

window.Vue = require('vue');

// install bootstrap vue 
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)

// //install vform
// import { Form, HasError, AlertError } from 'vform'
// window.form = Form
// Vue.use(HasError.name, HasError)
// Vue.use(AlertError.name, AlertError)

// // install vee-validator 
import { ValidationProvider } from 'vee-validate';
Vue.component('ValidationProvider', ValidationProvider);


// install VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/dashboard', component: require('./components/Dashboard.vue').default },
  { path: '/profile', component: require('./components/Profile.vue').default },
  { path: '/management', component: require('./components/Management.vue').default },
  { path: '/users', component: require('./components/Users.vue').default }

]

const router = new VueRouter({
  mode: 'history',
  routes
})


const app = new Vue({
  el: '#app',
  router
});
