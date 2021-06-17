import Vue from "vue";
import VueRouter from "vue-router";
import AuthLogin from "../views/Auth/index";
import PasswordReset from "../views/Auth/password_reset.vue";
import PasswordForget from "../views/Auth/password_forget.vue";
import Home from "../views/Home.vue";
import Admin from "../views/admin/index";
import Shop from "../views/shop/index";
import Shops from "../views/shop/shops";
import Cart from "../views/cart/index";
import Product from "../views/products/detail";
import User from "../views/user/index";
import Map from "../views/map/index";
import NotFound from "../views/NotFound/NotFound";

import Browse from "../views/browse";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/browse",
    name: "browse",
    component: Browse,
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthLogin,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    children: [],
  },
  {
    path: "/user",
    name: "user",
    component: User,
  },
  {
    path: "/shops",
    name: "shops",
    component: Shops,
  },
  {
    path: "/shop/:id",
    name: "shop",
    component: Shop,
  },
  {
    path: "/map",
    name: "map",
    component: Map,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/product/:id",
    name: "productDetail",
    component: Product,
  },
  {
    path: "*",
    name: "Not Found",
    component: NotFound,
  },
  {
    path: "/auth/forgot",
    name: "forgot",
    component: PasswordForget,
  },
  {
    path: "/auth/reset",
    name: "reset",
    component: PasswordReset,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
