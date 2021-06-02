import axios from "axios";

const search = {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        async SearchProduct({ commit }, q) {
            await axios.get(`/search/products?Brand=${q.Brand}&Name=${q.Name}&Category=${q.Category}`)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        

    },
    getters: {},
};

export default search;
