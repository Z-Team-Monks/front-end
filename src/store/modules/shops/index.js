import axios from "axios";

const shops = {
  namespaced: true,
  state: {
    shops: []
  },
  mutations: {
    SAVE_SHOPS(state, shops) {
      state.shops = shops;
    }
  },
  actions: {
    async GetShops({ commit }) {
      const options = {
        headers: {
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJuYmYiOjE2MjI0ODY3MjYsImV4cCI6MTYzMTEyNjcyNiwiaWF0IjoxNjIyNDg2NzI2fQ.fOp-k_QW98ms0T3HpsytgXdupCHx9-xsgWfA5tnCUT0`

        }
      }
      await axios.get("/shops", options)
        .then(res => {
          commit("SAVE_SHOPS", res.data)
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })

    },
    async GetShopProducts({ commit }, id) {
      await axios.get(`/shops/${id}/products`)
        .then(res => {
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })

    },
    async GetShopProducts({ commit }, id) {
      await axios.get(`/shops/${id}/products`)
        .then(res => {
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
    async CreateShop({ commit }, data) {
      const options = {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjMiLCJuYmYiOjE2MjI0NzczOTQsImV4cCI6MTYzMTExNzM5NCwiaWF0IjoxNjIyNDc3Mzk0fQ.BcSbNle3lakMDknwTMJR5Sm_TMScMG0uaostMNmt_ac`
        },
      };
      await axios.post("/shops", data, options)
        .then(res => {
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

    async DeleteShop({ commit }, id) {
      await axios.get(`/shops/${id}`)
        .then(res => {
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })

    },


  },
  getters: {},
};

export default shops;
