import axios from "axios";

const shops = {
  namespaced: true,
  state: {
    shops: [],
    allShops: [],
    AllProducts: [],
    shop: {},
    shopProducts: [],
    products: [],
    cart: [],
    carts: [],
    stats: {},
    ads: []
  },
  mutations: {
    SAVE_SHOPS(state, shops) {
      state.shops = shops;
    },
    SAVE_ALL_SHOPS(state, shops) {
      state.allShops = shops;
    },
    SAVE_ALL_PRODUCTS(state, AllProducts) {
      state.AllProducts = AllProducts;
    },
    SAVE_SHOP(state, shop) {
      state.shop = shop;
    },
    SAVE_SHOP_PRODUCTS(state, shopProducts) {
      state.shopProducts = shopProducts;
    },
    SAVE_PRODUCTS(state, products) {
      state.products = products
    },
    SAVE_TO_CART(state, cart) {
      state.cart = cart
    },
    SAVE_CART(state, carts) {
      state.carts = carts
    },
    STAT(state, stats) {
      state.stats = stats
    },
    SAVE_ADS(state, ads) {
      state.ads = ads
    }
  },

  actions: {
    DeactivateAd({ commit, dispatch }, ads) {
      const options = {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      };
      axios.delete(`/ads/${ads}`, options)
        .then(res => {
          dispatch("Ads")
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })
    },
    ActivateAd({ commit, dispatch }, ads) {
      const options = {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      };
      axios.patch(`/ads/${ads}`, { is_active: true }, options)
        .then(res => {
          dispatch("Ads")
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })
    },

    async GetShops({ commit }) {
      await axios.get("/shops")
        .then(res => {
          res.data.forEach(e => {
            e.isVisible = true
          });
          commit("SAVE_SHOPS", res.data)
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })

    },
    async GetUserShops({ commit }) {
      const options = {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`

        }
      }
      axios.get(`/users/shops`, options)
        .then(res => {
          res.data.forEach(e => {
            e.isVisible = true
          });
          commit("SAVE_SHOPS", res.data)
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })

    },


    async AddShopProduct({ commit }) {
      await axios.post("/products",)
    },
    async GetShopProducts({ commit }, id) {
      console.log("dispatching")
      await axios.get(`/shops/${id}/products`)
        .then(res => {
          res.data.products.forEach(e => {
            e.isVisible = true;
          })

          commit("SAVE_SHOP_PRODUCTS", res.data.products)
        }).catch(e => {
          console.log(e)
        })
    },
    async GetAllProducts({ commit }, id) {
      await axios.get(`/shops/${id}/products`)
        .then(res => {
          commit("SAVE_ALL_PRODUCTS", res.data.forEach(e => e.isVisible = true))
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })
    },
    async GetShopDetail({ commit }, id) {
      await axios.get(`/shops/${id}`)
        .then(res => {
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })

    },
    async CreateShop({ commit, dispatch }, data) {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      };
      await axios.post("/shops", data.shop, options)
        .then(res => {
          console.log("shop created")
          const options2 = {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
          };
          axios.post(`/shops/${res.data.id}/uploads`, data.formData, options2)
            .then(res => {
              dispatch("GetUserShops")
              console.log("sent file ")

            }).catch(e => {
              console.log(e)
            })

          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })
    },

    // update shop difference put and patch
    async UpdateShop({ commit }, data) {
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.put(`/shops/${data.id}`, JSON.stringify(data), options)
        .then(res => {
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })
    },

    async DeleteShop({ commit, dispatch }, id) {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      };

      await axios.delete(`/shops/${id}`, options)
        .then(res => {
          dispatch("GetUserShops")
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })

    },

    GetAllShops({ commit }, q) {

      axios.get("/shops")
        .then(res => {
          res.data.forEach(e => {
            e.isVisible = true
          });
          commit("SAVE_ALL_SHOPS", res.data)
          console.log("res.data")
          console.log(res.data)
          console.log("res.data")
        }).catch(e => {
          console.log(e)
        })
    },

    async SearchShop({ commit }, q) {
      await axios.get("/search/shops", { params: { name: q.query } })
        .then(res => {
          res.data.forEach(e => {
            e.isVisible = true
          });
          commit("SAVE_ALL_SHOPS", res.data)
          console.log("res.data")
          console.log(res.data)
          console.log("res.data")
        }).catch(e => {
          console.log(e)
        })
    },



    async GetShop({ commit }, id) {
      await axios.get(`/shops/${id}`)
        .then(res => {
          console.log("get shop")
          commit("SAVE_SHOP", res.data)
          return res.data
        }).catch(e => {
          console.log(e)
        })
    },


    GetAllProductsInDB({ commit }) {
      axios.get("/products")
        .then(res => {
          res.data.results.forEach(e => {
            e.isVisible = true
          });
          console.log("--------------")
          console.log(res.data)
          console.log("--------------")
          commit("SAVE_PRODUCTS", res.data.results)

        }).catch(e => {
          console.log(e)
        })
    },

    async SearchProducts({ commit }, q) {
      await axios.get("/search/products", { params: { name: q.query } })
        .then(res => {
          res.data.forEach(e => {
            e.isVisible = true
          });
          commit("SAVE_PRODUCTS", res.data)
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })
    },


    AddToCart({ commit, dispatch }, id) {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      };
      axios.post("/cart", JSON.stringify({ productId: id }), options)
        .then(res => {
          dispatch("GetUserCart")
          commit("SAVE_TO_CART", res.data)
        }).catch(e => {
          console.log(e)
        })

    },
    async GetUserCart({ commit }) {
      const options = {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      };

      console.log(localStorage.getItem("token"))

      axios.get("/cart", options)
        .then(res => {
          console.log(res.data)
          commit("SAVE_CART", res.data)
        }).catch(e => {
          console.log(e)
        })


    },
    async DeleteCartItem({ commit, dispatch }, id) {
      const options = {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      };

      await axios.delete(`/cart/${id}`, options)
        .then(res => {
          console.log("deleting")
          dispatch("GetUserCart")
        }).catch(e => {
          console.log(e)
        })


    },
    FollowShop({ commit, dispatch }, id) {
      const options = {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      }

      console.log(options);
      axios.post(`/shops/${id}/followers`, options)
        .then(e => {
          console.log(id)
          dispatch("GetAllShops")
        }).catch(e => {
          console.log(e)
        })
    },
    UnFollowShop({ commit, dispatch }, id) {
      const options = {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      }

      axios.delete(`/shops/${id}/followers`, options)
        .then(e => {
          console.log(id)
          dispatch("GetAllShops")
        }).catch(e => {

        })
    },



    async getStats({ commit }) {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      };
      await axios.get("/admin/status", options)
        .the(res => {
          commit("STAT", res.data)
        }).catch(e => {

        })

    },

    Ads({ commit }) {
      axios.get("/ads")
        .then(res => {
          commit("SAVE_ADS", res.data)
        })
        .catch(e => {
          console.log(e)
        })
    }


  },
  getters: {},
};

export default shops;
