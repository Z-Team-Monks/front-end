import axios from "axios";

const category = {
    namespaced: true,
    state: {
        categories: [],
        category: {}
    },
    mutations: {
        SAVE_CATEGORIES(state, cat) {
            state.categories = cat;
        },
        SAVE_CATEGORY(state, cat) {
            state.category = cat;
        }
    },
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
        async GetCategories({ commit }) {
            await axios.get(`/categories`)
                .then(res => {
                    commit("SAVE_CATEGORIES", res.data)
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        async GetCategory({ commit },id) {
            await axios.get(`/categories/${id}`)
                .then(res => {
                    commit("SAVE_CATEGORY", res.data)
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
