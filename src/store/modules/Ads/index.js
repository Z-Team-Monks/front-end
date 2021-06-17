import axios from 'axios'

const ads = {
    namespaced: true,

    state: {
        allAds: [],
        userAds: []
    },
    mutations: {
        SAVE_ALL_ADS(state, ads) {
            state.allAds = ads;
        },
        SAVE_USER_ADS(state, ads) {
            state.allAds = ads;
        },
    },
    actions: {
        CreateAd({ commit }, ads) {
            const options = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            };
            axios.post("/ads", ads, options)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        DeactivateAd({ commit }, ads) {
            const options = {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            };
            axios.delete(`/ads/${id}`, options)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        ActivateAd({ commit }, ads) {
            const options = {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            };
            axios.post(`/ads/${id}`, options)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        async GetUserAds({ commit }) {
            const options = {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }
            await axios.get("ads/user", options)
                .then(res => {
                    commit("SAVE_USER_ADS", res.data)
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },

        GetAllAds({ commit }) {
            axios.get("/ads")
                .then(res => {
                    commit("SAVE_ALL_ADS", res.data)
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        async ChangeAdStatus({ commit }, status) {
            const options = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            await axios.put("ads/admin", JSON.stringify(status), options)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        async DeleteAd({ commit }, status) {
            const options = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            await axios.delete("ads/admin", JSON.stringify(status), options)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
    },
    getters: {},
}


export default ads;