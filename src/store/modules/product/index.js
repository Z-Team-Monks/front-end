import axios from "axios";

const product = {
  namespaced: true,
  states: {},
  mutations: {},
  actions: {
    async GetProducts({ commit }, credentials) {
      await axios.get("/products")
        .then(res => {
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



  }
  , getters: {},
}

export default product;
