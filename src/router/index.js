import Vue from "vue";
import VueRouter from "vue-router";
import AuthLogin from "../views/auth/index";
import Home from "../views/Home.vue";
import Shop from "../views/shop/index";
import Cart from "../views/cart/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthLogin

  },
  {
    path: "/shop",
    name: "shop",
    component: Shop
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
