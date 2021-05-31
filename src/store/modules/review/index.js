import axios from "axios";

const review = {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        async SubmitProductReview({ commit }, review) {
            const options = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            await axios.post(`products/${id}/reviews`, JSON.stringify(review), options)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        async GetProductReview({ commit }, id) {
            await axios.get(`products/${id}/reviews`)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        async GetProductReviewDetail({ commit }, data) {
            await axios.get(`products/${data.id}/reviews/${data.reviewID}`)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
    },
    getters: {},
};

export default review;
