import axios from "axios";

const auth = {
  namespaced: true,
  state: {
    isAuthenticated: false,
    message: "",
    successMessage: "",
    status: false,
    isLoading: false,
    user: {},
    hasError: false,
  },
  mutations: {
    CHANGE_AUTH_STATUS(state, status) {
      state.isAuthenticated = status;
      localStorage.setItem("isAuthenticated", status);
    },
    CREATE_LOADING(state, status) {
      state.isLoading = status;
    },
    // This should be changed vuex-persist state
    SAVE_TOKEN(state, token) {
      localStorage.setItem("auth-token", token);
    },
    current_user(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    SAVE_MESSAGE(state, message) {
      state.message = message;
    },
    SAVE_SUCCESS_MESSAGE(state, message) {
      state.successMessage = message;
    },

    HAS_ERROR(state, message) {
      state.hasError = message;
    },
  },
  actions: {
    async Login({ commit, dispatch }, credentials) {
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(credentials)
      if (credentials.username == "admin") {
        localStorage.setItem("role" , "admin")
        commit("current_user", { role: "admin" })
      } else {
        localStorage.setItem("role" , "user")
        commit("current_user", { role: "user" })

      }
      commit("CREATE_LOADING", true);
      await axios
        .post("/auth", JSON.stringify(credentials), options, {
          withCredentials: true,
        })
        .then((res) => {
          localStorage.setItem("isAuthenticated", true);
          localStorage.setItem("token", res.data.token);
          dispatch("GetMe");
          commit("CHANGE_AUTH_STATUS", true);
          localStorage.setItem(
            "AUTH_STATUS",
            res.data.token ? res.data.token : undefined
          );
          commit("SAVE_MESSAGE", "successfully logged in");
        })
        .catch((error) => {
          localStorage.setItem("isAuthenticated", false);
          console.log("");
          commit("SAVE_MESSAGE", "Email or Password Incorrect");
        });
      commit("CREATE_LOADING", false);
    },
    async LogOut({ commit }, credentials) {
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      axios
        .post("/users/logout", options)
        .then((res) => {
          console.log("logout");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async GetMe({ commit }, credentials) {
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      axios
        .get("/users", options)
        .then((res) => {
          commit("current_user", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    Register({ commit, dispatch }, credentials) {
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      dispatch("saveMessage", "successfully registered, you can sign in now");
      axios
        .post("/users", credentials)
        .then((res) => {
          commit("HAS_ERROR", false);

          localStorage.setItem("CURRENT_USER", JSON.stringify(res.data));
          // commit("SAVE_SUCCESS_MESSAGE" , "successfully registered, you can sign in now")
          dispatch(
            "saveMessage",
            "successfully registered, you can sign in now"
          );
          // commit("SAVE_MESSAGE", "successfully registered, you can sign in now")
        })
        .catch((e) => {
          if (e.response.data.message.email) {
            dispatch("saveMessage", "Email Already Exists");
          } else if (e.response.data.message.username) {
            dispatch("saveMessage", "username Already Exists");
          }
          console.log(e.response.data.message.username);
          commit("HAS_ERROR", true);
        });
    },
    async SendResetEmail({ commit }, { email, host }) {
      axios
        .post("/auth/forgot", {
          email,
          host,
        })
        .then((r) => console.log("reset link sent! check your email", r))
        .catch((e) => console.log("error sending reset email: ", e));
    },
    async ResetPassword({ commit }, { password, token }) {
      axios
        .post("/auth/reset?token=" + token, {
          new_password: password,
        })
        .then((r) => console.log("reset link sent! check your email", r))
        .catch((e) => console.log("error sending reset email: ", e));
    },
    changeMessageStatus({ commit }) {
      commit("SAVE_SUCCESS_MESSAGE", "");
      commit("SAVE_MESSAGE", "");
    },
    ChangeStatus({ commit }, status) {
      commit("CHANGE_AUTH_STATUS", status);
    },
    saveMessage({ commit }, message) {
      commit("SAVE_MESSAGE", message);
    },
  },

  getters: {},
};

export default auth;
