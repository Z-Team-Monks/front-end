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
axios.defaults.baseURL = 'http://localhost:51042/api/v1';

Vue.use(require('vue-chartist'))
Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

