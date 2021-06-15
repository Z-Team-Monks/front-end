import axios from "axios";

const admin = {
    namespaced: true,
    state: {
        AUsers: [],
        AShops: [],
        AProducts: [],
        stat: {}
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
        stats(state, stat) {
            state.stat = stat
        }
    },
    actions: {
        async GetAllUsers({ commit }) {
            const options = {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            };
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

        async UpdateShopStatus({ commit }, data) {
            const options = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            };
            await axios.get(`/shops/${data.shopId}`, JSON.stringify(data), options)
                .then(res => {



                }).catch(e => {
                    console.log(e)
                })
        },



    },
    getters: {},
};

export default admin;
