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
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJuYmYiOjE2MjI1ODY4ODUsImV4cCI6MTYzMTIyNjg4NSwiaWF0IjoxNjIyNTg2ODg1fQ.En4rTJmezNk1YJwYTUoBIZUueL4WQI0fxXGELHdoxGs`

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

        async UpdateShopStatus({ commit }, data) {
            const options = {
                headers: {
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjQiLCJuYmYiOjE2MjI1ODU4NTMsImV4cCI6MTYzMTIyNTg1MywiaWF0IjoxNjIyNTg1ODUzfQ.GOR6tB5py2y2OjOQNI67DaPt-uZsqH420PvhtoXY-mM`
                    ,
                    "Content-Type": "application/json",
                }
            }
            await axios.get(`/shops/${data.shopId}`, JSON.stringify(data), options)
                .then(res => {



                }).catch(e => {
                    console.log(e)
                })
        }

    },
    getters: {},
};

export default admin;
