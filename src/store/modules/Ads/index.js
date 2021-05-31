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
        async CreateAd({ commit }, ads) {
            const options = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            await axios.post("ads/user", JSON.stringify(ads), options)
                .then(res => {
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        async GetUserAds({ commit }) {
            await axios.get("ads/user")
                .then(res => {
                    commit("SAVE_ADS" , res.data)
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        },
        async GetAllAds({ commit }) {
            await axios.get("/ads")
                .then(res => {
                    commit("SAVE_ALL_ADS" , res.data)
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