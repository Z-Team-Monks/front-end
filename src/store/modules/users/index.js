import axios from 'axios'

const users = {
    namespaced: true,

    state: {
        users: [],
        userDetails: {}
    },
    mutations: {
        SAVE_USERS(state, users) {
            state.users = users;
        },
        SAVE_USER_DETAIL(state,detail) {
            state.userDetails = detail;
        },
    },
    actions: {
        async CreateShop({ commit }, formData) {
            const bodyFormData = new FormData();

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

        async GetUserDetails({ commit },id) {
            const options = {
                headers: {
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJuYmYiOjE2MjI0ODY3MjYsImV4cCI6MTYzMTEyNjcyNiwiaWF0IjoxNjIyNDg2NzI2fQ.fOp-k_QW98ms0T3HpsytgXdupCHx9-xsgWfA5tnCUT0`

                }
            }
            await axios.get(`/users/${id}`, options)
                .then(res => {
                    commit("SAVE_USER_DETAIL" , res.data)
                    console.log(res.data)
                }).catch(e => {
                    console.log(e)
                })
        }

    },
    getters: {},
}


export default users;