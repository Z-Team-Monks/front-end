import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import './plugins/chartist'
import './plugins/base'
import axios from 'axios'
import VueAxios from 'vue-axios'





// Vue.prototype.$http = axios;
/*
this is where you added any headers that are global to all the requests to the api
 for example credentials
*/
// credential support will enable us to send an auth token
// axios.defaults.withCredentials = true;
// axios.defaults.withCredentials = true;

// we could add a bse url to shorten the routes eg. by setting the base url to  http://localhost:500 we could just use /route_name in our axios calls
// axios.defaults.baseURL = "http://127.0.0.1:51042/api/v1";
// axios.defaults.baseURL = "http://localhost:51042/api/v1";



Vue.prototype.$http = axios;
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.xsrfCookieName = undefined;
axios.defaults.baseURL = 'http://10.6.250.211:5522/api/v1';
// axios.defaults.baseURL = 'http://localhost:51042/api/v1';

Vue.use(require('vue-chartist'))
Vue.config.productionTip = false;

// if (localStorage.getItem("AUTH_STATUS") != undefined) {
//   // axios.headers[] = `bearer ${localStorage.getItem('AUTH_STATUS')}`
//   axios.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem('AUTH_STATUS')}`;

// }

const app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

// router.beforeEach((to, from, next) => {
//   if (to.meta.isAUTHENTICATED) {
//     if (!isLoggedIn) {
//       next({
//         name: 'login',
//       });
//     } else if (isWhom == 'admin') {
//       next();
//     } else if (isWhom == '') {
//       next({
//         name: 'login',
//       });
//     } else {
//       next({
//         name: isWhom,
//       });
//     }
//   } else if (to.meta.requiresAuth) {
//     if (!isLoggedIn) {
//       next({
//         name: 'login',
//       });
//     } else if (isWhom == 'teacher') {
//       next();
//     } else if (isWhom == '') {
//       next({
//         name: 'login',
//       });
//     } else {
//       next({
//         name: isWhom,
//       });
//     }
//   } else if (to.meta.requiresAuthentication) {
//     if (!isLoggedIn) {
//       next({
//         name: 'login',
//       });
//     } else if (isWhom == 'registrar') {
//       next();
//     } else if (isWhom == '') {
//       next({
//         name: 'login',
//       });
//     } else {
//       next({
//         name: isWhom,
//       });
//     }
//   } else {
//     next();
//   }
// });
