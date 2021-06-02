import axios from "axios";

const message = {
    namespaced: true,
    state: {
        showSnack: false,
        message: ''

    },
    mutations: {

        SHOW_NOTIFICATION(state, status) {
            state.showSnack = status
        },
        SAVE_MESSAGE(state, status) {
            state.message = status
        }

    },
    actions: {

        ShowNotification({ commit }) {
            console.log("this commti me")
            commit("SHOW_NOTIFICATION", true)
        },
        HideNotification({ commit }) {
            commit("SHOW_NOTIFICATION", false)
        },

        SaveMessage({ commit }, message) {
            commit("SAVE_MESSAGE", message)
        }

    }
    , getters: {
       
    },
}

export default message;
