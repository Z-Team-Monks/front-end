import axios from 'axios'

const auth = {
  namespaced: true,
  state: {
    isAuthenticated: false,
    message: "",
    successMessage: "",
    status: false,
    isLoading: false,
    user: {}
  },
  mutations: {
    CHANGE_AUTH_STATUS(state, status) {
      state.isAuthenticated = status;
      localStorage.setItem("isAuthenticated", status)
    },
    CREATE_LOADING(state, status) {
      state.isLoading = status
    },
    // This should be changed vuex-persist state
    SAVE_TOKEN(state, token) {
      localStorage.setItem("auth-token", token)
    },
    current_user(state,user) {
      state.user = user
      localStorage.setItem("user", JSON.stringify(user))
    },
    SAVE_MESSAGE(state, message) {
      state.message = message
    },
    SAVE_SUCCESS_MESSAGE(state, message) {
      state.successMessage = message
    },

  },
  actions: {
    async Login({ commit }, credentials) {
      await axios.get("/products", { withCredentials: false })
        .then(res => {
          console.log(res.data)
        }).catch(e => {
          console.log(e)
        })

      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      commit('CREATE_LOADING', true);
      await axios.post("/auth", JSON.stringify(credentials), options, { withCredentials: true })
        .then((res) => {
          console.log(res.data)
          localStorage.setItem("isAuthenticated", true)
          localStorage.setItem("token", res.data.token)
          commit("CHANGE_AUTH_STATUS", true)
          localStorage.setItem("AUTH_STATUS", (res.data.token) ? res.data.token : undefined)
          commit('SAVE_MESSAGE', "successfully logged in");
        })
        .catch((error) => {
          localStorage.setItem("isAuthenticated", false)
          console.log("")
          commit('SAVE_MESSAGE', "Email or Password Incorrect");
        });
      commit('CREATE_LOADING', false);
    },
    async GetMe({ commit }, credentials) {
      const options = {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`

        }
      }
      await axios.get("/me", options)
        .then((res) => {
          commit("current_user", res.data)
        })
        .catch((error) => {
          console.log(error)
        });
    },

    async Register({ commit }, credentials) {
      const options = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      console.log("register ")
      await axios.post("/user", credentials, options)
        .then(res => {
          console.log(res.data)
          localStorage.setItem("CURRENT_USER", JSON.stringify(res.data))
          commit('SAVE_SUCCESS_MESSAGE', "successfully logged in");
        }).catch(e => {
          console.log(e);
        })
    },
    changeMessageStatus({ commit }) {
      commit('SAVE_SUCCESS_MESSAGE', "");
      commit('SAVE_MESSAGE', "")
    }
    ,
    ChangeStatus({ commit }, status) {
      commit("CHANGE_AUTH_STATUS", status)
    }
  },

  getters: {

  },
};

export default auth;
