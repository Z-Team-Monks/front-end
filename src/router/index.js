import Vue from "vue";
import VueRouter from "vue-router";
import AuthLogin from "../views/Auth/index";
import Home from "../views/Home.vue";
import Admin from "../views/admin/index";
import Shop from "../views/shop/index";
import Cart from "../views/cart/index";
import Product from "../views/products/detail";

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
    component: AuthLogin,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/product/:id",
    name: "productDetail",
    component: Product
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
