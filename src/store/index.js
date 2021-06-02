import Vue from "vue";
import Vuex from "vuex";
import admin from "./modules/admin";
import auth from "./modules/auth";
import ads from "./modules/ads";
import category from "./modules/category";
import notification from "./modules/notification";
import product from "./modules/product";
import review from "./modules/review";
import shops from "./modules/shops";
import search from "./modules/search";
import users from "./modules/users";
import wishlist from './modules/wishlist'
import message from "./modules/snackbar";



Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    product,
    shops,
    ads,
    wishlist,
    search,
    review,
    category,
    notification,
    admin,
    users,
    message
  },
});
