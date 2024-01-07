import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { AUTHORIZATION_TYPES } from "@/data/constants";

Vue.config.productionTip = false;

store.commit("SET_TOKEN", localStorage.token);

router.beforeEach((to, from, next) => {
  const authType = to.meta.authorizationType;
  if (authType == AUTHORIZATION_TYPES.protected && !store.getters.getToken) {
    router.push({ name: "login" });
  } else if (authType == AUTHORIZATION_TYPES.guest && store.getters.getToken) {
    router.push({ name: "users" });
  } else next();
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
