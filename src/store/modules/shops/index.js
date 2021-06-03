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
    cart: []
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
      console.log("product is being mutated")
      state.shopProducts = shopProducts;
    },
    SAVE_PRODUCTS(state, products) {
      state.products = products
    },
    SAVE_TO_CART(state, cart) {
      state.cart = cart
    }
  },
  actions: {
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
      await axios.get("/user/shops", options)
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


    async AddShopProduct({commit}) {
      await axios.post("/products", )
    },
    async GetShopProducts({ commit }, id) {
      console.log("dispatching")
      await axios.get(`/shops/${id}/products`)
        .then(res => {
          res.data.forEach(e => {
            e.isVisible = true;
          })

          commit("SAVE_SHOP_PRODUCTS", res.data)
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
    async CreateShop({ commit,dispatch }, data) {
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
          axios.post(`/shops/${res.data.shopId}/uploads`, data.formData, options2)
            .then(res => {
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

    async DeleteShop({ commit,dispatch }, id) {
      await axios.delete(`/shops/${id}`)
        .then(res => {
          dispatch("GetUserShops")
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })

    },

    async GetAllShops({ commit }, q) {
      await axios.get("/shops")
        .then(res => {
          res.data.forEach(e => {
            e.isVisible = true
          });
          commit("SAVE_ALL_SHOPS", res.data)
          console.log(res.data)
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
          console.log(res.data)
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


    async GetAllProductsInDB({ commit }) {
      await axios.get("/products")
        .then(res => {
          res.data.forEach(e => {
            e.isVisible = true
          });
          console.log("--------------")
          console.log(res.data)
          console.log("--------------")
          commit("SAVE_PRODUCTS", res.data)

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


    async AddToCart({commit} , id) {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      };
      await axios.post("/cart" , JSON.stringify({ productId: id}) )
      .then(res => {

        commit("SAVE_TO_CART", res.data)
      }).catch(e => {
        console.log(e)
      } )
    
    }


  },
  getters: {},
};

export default shops;
