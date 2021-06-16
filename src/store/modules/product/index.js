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
    async StoreProduct({ commit }, data) {
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(`/products`, JSON.stringify(data), options)
        .then(res => {
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })
    },


    async GetProductWithLimit({ commit }, param) {
      await axios.get("/products", { params: { limit: param } })
        .then(res => {
          res.data.forEach(p => {
            p.isVisible = true
          })
          commit("SAVE_PRODUCTS", res.data)
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

      axios.post(`/products/${data.id}/reviews`, { comment: data.review, rating: data.rating }, options)
        .then(res => {
          console.log("reviewed")
          dispatch("GetReview", data.id)
          // commit("SAVE_PRODUCTS", res.data)
        }).catch(e => {
          console.log(e)
        })
    },
    async GetReview({ commit }, data) {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      }
      await axios.get(`/products/${data.id}/reviews`, { comment: data.review, rating: data.rating }, options)
        .then(res => {
          console.log("reviewed")
          // commit("SAVE_PRODUCTS", res.data)
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
