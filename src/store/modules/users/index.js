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



    },
    getters: {},
}


export default users;