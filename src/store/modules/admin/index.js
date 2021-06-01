import axios from "axios";

const admin = {
    namespaced: true,
    state: {
        AUsers: [],
        AShops: [],
        AProducts: []
    },
    mutations: {
        SAVE_USERS(state, users) {
            state.AUsers = users
        },
        SAVE_ALL_SHOPS(state, shops) {
            state.AShops = shops
        },
        SAVE_ALL_PRODUCTS(state, products) {
            state.AProducts = products
        },
    },
    actions: {
        async GetAllUsers({ commit }) {
            const options = {
                headers: {
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJuYmYiOjE2MjI0ODY3MjYsImV4cCI6MTYzMTEyNjcyNiwiaWF0IjoxNjIyNDg2NzI2fQ.fOp-k_QW98ms0T3HpsytgXdupCHx9-xsgWfA5tnCUT0`

                }
            }
            await axios.get("/users", options)
                .then(res => {
                    commit("SAVE_USERS", res.data)
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        async GetAllShops({ commit }) {
            await axios.get("/shops")
                .then(res => {
                    commit("SAVE_ALL_SHOPS", res.data)
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        async GetAllProducts({ commit }) {
            await axios.get("/products")
                .then(res => {
                    commit("SAVE_ALL_PRODUCTS", res.data)
                    console.log(res.data)
                    return res.data
                }).catch(e => {
                    console.log(e)
                })
        },

    },
    getters: {},
};

export default admin;
