import axios from "axios";

/*
    authentication setup
*/
const auth = {
  namespaced: true,
  state: {
    isAuthenticated: false,
    message: "",
    successMessage: "",
    status: false,
    isLoading: false
  },
  mutations: {
    CHANGE_AUTH_STATUS(state, status) {
      state.isAuthenticated = status
    },
    CREATE_LOADING(state, status) {
      state.isLoading = status
    },
    // This should be changed vuex-persist state
    SAVE_TOKEN(state, token) {
      localStorage.setItem("auth-token", token)
    },
    SAVE_MESSAGE(state, message) {
      state.message = message
    },
    SAVE_SUCCESS_MESSAGE(state, message) {
      state.successMessage = message
    },

  },
  actions: {


    async makeLoginRequest({ commit }, credentials) {
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      commit('CREATE_LOADING', true);
      await axios.post("users/auth", JSON.stringify(credentials), options)
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

    changeMessageStatus({commit}) {
      commit('SAVE_SUCCESS_MESSAGE', "");
      commit('SAVE_MESSAGE', "")
    }

  },

  getters: {

  },
};

export default auth;
