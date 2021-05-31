import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import category from "./modules/category";
import product from "./modules/product";
import shops from "./modules/shops";
import search from "./modules/search";
import review from "./modules/review";
import Ads from "./modules/ads";
import wishlist from './modules/wishlist'



Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    product,
    shops,
    Ads,
    wishlist,
    search,
    review,
    category
  },
});
