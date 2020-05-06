// import { loadVueComponentsFromDirectory } from "./shared/utils";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// This way you only include the icons you will actually use.
// import '@fortawesome/fontawesome/js/fontawesome.min.js';
// import fontawesome from '@fortawesome/fontawesome-free/js/fontawesome.min.js';
// import { faEdit } from '@fortawesome/fontawesome-free/js/solid.min.js';

// fontawesome.config = {
//   autoAddCss: false,
// };

// fontawesome.library.add(faEdit);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// // load all layouts files
// const layout_files = require.context("./layouts", true, /\.vue$/i);
// loadVueComponentsFromDirectory(Vue, layout_files);

// // load all views files
// const views_files = require.context("./views", true, /\.vue$/i);
// loadVueComponentsFromDirectory(Vue, views_files);

const req = require.context('./components/', true, /\.(js|vue)$/i);
req.keys().map(key => {
  const name = key.match(/\w+/)[0];
  return Vue.component(name, req(key))
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


// const root = document.getElementById("app");
// Vue.prototype.$auth = root.dataset.auth ? JSON.parse(root.dataset.auth) : "";

// // un-setting the `data-auth` attribute
// if (root.dataset.auth) {
//   root.removeAttribute("data-auth");
// }
window.onload = function () {
  const app = new Vue({
    el: '#app',
  });
}
