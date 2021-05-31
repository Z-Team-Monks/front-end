import axios from "axios";

const wishlist = {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        async GetMyCart({ commit }) {
            await axios.get("/cart")
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        async GetCartProductDetail({ commit }, id) {
            await axios.get(`/cart/${id}`)
                .then(res => {
                    console.log(res.data)
                })
                .catch(e => {
                    console.log(e)
                })
        },
        async RemoveProductFromCart({ commit }, id) {
            await axios.delete(`/cart/${id}`)
                .then(res => {
                    console.log(res.data)
                })
                .catch(e => {
                    console.log(e)
                })
        },
        async StoreProductToCart({ commit }, product) {
            const options = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            await axios.post("/cart", JSON.stringify(product), options)
                .then(res => {
                    console.log(res.data)
                })
                .catch(e => {
                    console.log(e)
                })
        }

    },
    getters: {},
};

export default wishlist;
