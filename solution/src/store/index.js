import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: false,
  },
  getters: {
    getToken: ({ token }) => token,
  },
  mutations: {
    SET_TOKEN(state, token) {
      Vue.set(state, "token", token);
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit("SET_TOKEN", token);
    },
  },
  modules: {},
});
