import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import { AUTHORIZATION_TYPES } from "@/data/constants";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
    meta: {
      authorizationType: AUTHORIZATION_TYPES.guest,
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      authorizationType: AUTHORIZATION_TYPES.protected,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardView.vue"),
    children: [
      {
        path: "users",
        name: "users",
        meta: {
          authorizationType: AUTHORIZATION_TYPES.protected,
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/UsersView.vue"),
      },
      {
        path: "questionnaries",
        name: "questionnaries",
        meta: {
          authorizationType: AUTHORIZATION_TYPES.protected,
        },
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/QuestionnariesView.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
