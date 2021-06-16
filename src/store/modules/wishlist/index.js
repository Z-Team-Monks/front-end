import axios from "axios";

const wishlist = {
    namespaced: true,
    state: {
        userCarts: []
    },
    mutations: {
        SAVE_USER_CART(state, cart) {
            state.userCarts = cart
        }
    },
    actions: {
        // async GetMyCart({ commit }) {
        //     const options = {
        //         headers: {
        //             "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJuYmYiOjE2MjI0ODY3MjYsImV4cCI6MTYzMTEyNjcyNiwiaWF0IjoxNjIyNDg2NzI2fQ.fOp-k_QW98ms0T3HpsytgXdupCHx9-xsgWfA5tnCUT0`

        //         }
        //     }
        //     await axios.get("/cart", options)
        //         .then(res => {
        //             commit("SAVE_USER_CART", res.data)
        //         }).catch(e => {
        //             console.log(e)
        //         })
        // },
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
