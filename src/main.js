import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins/chartist";
import "./plugins/base";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuelidate from "vuelidate";
import VueMapbox from "@studiometa/vue-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import messageComp from "./views/global/snackBar";

// Vue.prototype.$http = axios;
/*
this is where you added any headers that are global to all the requests to the api
 for example credentials
*/
// credential support will enable us to send an auth token
// axios.defaults.withCredentials = true;
// axios.defaults.withCredentials = true;

// we could add a bse url to shorten the routes eg. by setting the base url to  http://localhost:500 we could just use /route_name in our axios calls
// axios.defaults.baseURL = "http://10.6.250.75:4444/api/v1";
// axios.defaults.baseURL = "http://localhost:51042/api/v1";

Vue.prototype.$http = axios;
axios.defaults.withCredentials = true;
// axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.xsrfCookieName = undefined;
// axios.defaults.baseURL = 'http://10.6.250.73:5522/api/v1';

axios.defaults.baseURL = "http://192.168.43.252:4444/api/v1";
// axios.defaults.baseURL = "http://10.6.154.213:5522/api/v1";
localStorage.setItem("url", "http://192.168.43.252:4444/");
Vue.use(require("vue-chartist"));
Vue.use(Vuelidate);
Vue.use(VueMapbox);
Vue.config.productionTip = false;
Vue.component("messageComp", messageComp);

router.beforeEach((to, from, next) => {
  const a = JSON.parse(localStorage.getItem("user"));
  console.log("[--------------------------]");
  console.log(localStorage.getItem("isAuthenticated"));
  console.log(a);
  console.log("[--------------------------]")
  if (to.path == "/user") {
    if (JSON.parse(localStorage.getItem("isAuthenticated")) && localStorage.getItem("role")  === "user") {
      next();
    } else {
      router.push({ name: "Home" }).catch(() => {});
    }
  } else if (to.path == "/admin") {
    if (
      JSON.parse(localStorage.getItem("isAuthenticated")) === true &&
      localStorage.getItem("role")  == "admin"
      ) {
        next();
      } else {
        router.push({ name: "Home" }).catch(() => {});
      }
    } else if (to.path == "/auth") {
    if (JSON.parse(localStorage.getItem("isAuthenticated"))) {
      router.push({ name: "Home" }).catch(() => {});
    } else {
      next();
    }
  } else {
    next();
  }
});

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
