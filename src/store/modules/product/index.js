import axios from "axios";

const product = {
  namespaced: true,
  state: {
    products: [],
    AllProducts: [],
    product: []
  },

  mutations: {
    SAVE_PRODUCTS(state, product) {
      state.products = product;
    },
    SAVE_PRODUCT(state, product) {
      state.product = product;
    },
    SAVE_ALL_PRODUCTS(state, product) {
      state.AllProducts = product
    }
  },
  actions: {
    async GetProducts({ commit }) {
      await axios.get("/products")
        .then(res => {
          res.data.forEach(e => {
            e.isVisible = true
          });

          console.log("_________________")
          console.log(res.data)
          console.log("_________________")
          commit("SAVE_PRODUCTS", res.data)

        }).catch(e => {
          console.log(e)
        })
    },
    async SearchProducts({ commit }, q) {
      await axios.get("/products", { params: { name: q.name } })
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
    async GetTrendingProducts({ commit }, credentials) {
      await axios.get("/products")
        .then(res => {
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })
    },
    async GetProductByID({ commit }, id) {
      await axios.get(`/products/${id}`)
        .then(res => {
          commit("SAVE_PRODUCT", res.data)
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })

    },
    async UpdateProduct({ commit }, data) {
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.patch(`/products/${id}`, JSON.stringify(data), options)
        .then(res => {
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })
    },
    StoreProduct({ commit }, data) {
      const options = {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      };
      axios.post(`/products`, data.product, options)
        .then(res => {
          const options = {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data",
            },
          };

          console.log(res.data)
          console.log("product created")
          axios.post(`/products/${res.data.productId}/uploads`, data.formData, options)
            .then(res => {
              console.log("product image added")
            })
            .catch(e => {
              console.log(e.message)
            })
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })
    },


    async GetProductWithLimit({ commit }, param) {
      await axios.get("/products", { params: { limit: param } })
        .then(res => {
          res.data.results.forEach(p => {
            p.isVisible = true
          })
          commit("SAVE_PRODUCTS", res.data.results)
        }).catch(e => {
          console.log(e)
        })
    },

    PostReview({ commit, dispatch }, data) {
      const options = {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      };
      console.log("---------------------------")
      console.log(data.id)
      console.log("---------------------------")

      axios.post(`/products/${data.id}/reviews`, { comment: data.review, rating: data.rating }, options)
        .then(res => {
          console.log("reviewed")
          dispatch("GetReview", data.id)
          // commit("SAVE_PRODUCTS", res.data)
        }).catch(e => {
          console.log(e)
        })
    },
    GetReview({ commit }, data) {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      }
      axios.get(`/products/${data.id}/reviews`, { comment: data.review, rating: data.rating }, options)
        .then(res => {
          console.log("reviewed")
          // commit("SAVE_PRODUCTS", res.data)
        }).catch(e => {
          console.log(e)
        })
    },
    GetUserProducts({ commit }) {
      const options = {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      };
      axios.get(`/shops/products`, options)
        .then(res => {
          console.log("user-products-launched")
          console.log(res.data)

          commit("SAVE_PRODUCTS", res.data)
        }).catch(e => {
          console.log(e)
        })
    },
    DeleteUserProduct({ commit, dispatch }, id) {
      const options = {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      }
      axios.delete(`/products/${id}`, options)
        .then(res => {
          console.log("user-products-launched")
          dispatch("GetUserProducts")
        }).catch(e => {
          console.log(e)
        })
    },



  }
  , getters: {
    products: state => {
      return state.products
    }
  },
}

export default product;
