export const state = () => ({
  userData: null,
  token: null,
  isLoading: false
});

export const mutations = {
  register(state, userData) {
    state.userData = userData;
    state.token = state.userData.token;
    if (state.userData) {
      this.$router.push("/");
    }
  },
  login(state, token) {
    this.$router.push("/");
    console.log(state.token);
    localStorage.setItem("token", token.token);
    state.token = localStorage.getItem("token");
  },
  logout(state) {
    state.userData = null;
    state.token = null;
  },
  isLoading(state) {
    state.isLoading = true;
  },
  isLoaded(state) {
    state.isLoading = false;
  }
};
export const actions = {
  register({ commit }, payload) {
    commit("isLoading");
    this.$axios
      .post("/api/register/", {
        headers: {
          "Content-type": "application/json"
        },
        email: payload.email,
        password: payload.password
      })
      .then(function(response) {
        commit("register", response.data);
        commit("isLoaded");
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  login({ commit }, payload) {
    commit("isLoading");
    this.$axios
      .post("/api/login/", {
        headers: {
          "Content-type": "application/json"
        },
        email: payload.email,
        password: payload.password
      })
      .then(function(response) {
        commit("login", response.data);
        commit("isLoaded");
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  logout({ commit }, payload) {
    commit("logout");
  }
};
