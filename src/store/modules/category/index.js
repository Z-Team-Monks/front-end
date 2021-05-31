import axios from "axios";

const category = {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        async AddCategory({ commit }, category) {
            const options = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            await axios.post(`/categories`, JSON.stringify(category), options)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        async GetCategories({ commit }, id) {
            await axios.get(`/categories`)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        async DeleteCategory({ commit }, id) {
            await axios.delete(`/categories/${id}`)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
    },
    getters: {},
};

export default category;
