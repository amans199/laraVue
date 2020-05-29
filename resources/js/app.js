// import { loadVueComponentsFromDirectory } from "./shared/utils";

require('./bootstrap');
require('./customjs')


window.Vue = require('vue');
// const Vue = window.vue;
import Gate from "./Gate"
Vue.prototype.$gate = new Gate(window.user)
// import Vue from 'vue';

// install bootstrap vue 
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)


// install moment js 
import moment from 'moment';

// install swal 
import Swal from 'sweetalert2'
window.Swal = Swal
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast = Toast


// install progreebar
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '3px'
})

// //install vform
// import { Form, HasError, AlertError } from 'vform'
// window.form = Form
// Vue.use(HasError.name, HasError)
// Vue.use(AlertError.name, AlertError)

// // install vee-validator 
// import { ValidationProvider } from 'vee-validate';
// Vue.component('ValidationProvider', ValidationProvider);


// install VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/dashboard', component: require('./components/Dashboard.vue').default },
  { path: '/developer', component: require('./components/Developer.vue').default },
  { path: '/profile', component: require('./components/Profile.vue').default },
  { path: '/management', component: require('./components/Management.vue').default },
  { path: '/users', component: require('./components/Users.vue').default }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

// register global filter
Vue.filter('UpText', (text) => {
  if (!text) return ''
  text = text.toString()
  return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate', (created) => {
  return moment(created).format('Do MMMM YYYY');
});



// add laravel passport components 
Vue.component(
  'passport-clients',
  require('./components/passport/Clients.vue').default
);

Vue.component(
  'passport-authorized-clients',
  require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
  'passport-personal-access-tokens',
  require('./components/passport/PersonalAccessTokens.vue').default
);




const app = new Vue({
  el: '#app',
  router
});
