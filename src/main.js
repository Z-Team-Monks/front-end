import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";


Vue.prototype.$http = axios
/*
this is where you added any headers that are global to all the requests to the api
 for example credentials
*/
// credential support will enable us to send an auth token
axios.defaults.withCredentials = true;

// we could add a bse url to shorten the routes eg. by setting the base url to  http://localhost:500 we could just use /route_name in our axios calls
// axios.defaults.baseURL = "url_to_the_server/api"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
