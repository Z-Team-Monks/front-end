import axios from 'axios'

const users = {
    namespaced: true,

    state: {
        users: []
    },
    mutations: {
        SAVE_USERS(state, users) {
            state.users = users;
        },
    },
    actions: {
        async CreateShop({ commit }, formData) {
            const bodyFormData = new FormData();

            // bodyFormData.append()

            await axios.post("/auth", JSON.stringify(credentials), options, { withCredentials: true })
                .then((res) => {
                    console.log(res.data)
                    commit("CHANGE_AUTH_STATUS", (res.data.token) ? true : false)
                    localStorage.setItem("AUTH_STATUS", (res.data.token) ? res.data.token : undefined)
                    commit('SAVE_SUCCESS_MESSAGE', "successfully logged in");
                })
                .catch((error) => {
                    commit('SAVE_MESSAGE', error);
                });
            commit('CREATE_LOADING', false);
        },
    }
},
    getters: {},
}


export default users;