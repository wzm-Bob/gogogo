import Vue from "vue";
import Router from "vue-router";
import LoginLayout from "../public/loginLayout.vue";

Vue.use(Router);
/* 这里使用官方推荐的懒加载import */
export const commonRouter = [
  {
    path: "/",
    name: "LoginLayout",
    component: LoginLayout,
    redirect:'/login',
    children: [
      {
        path: "/login",
        name: "login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/login/login.vue")
      },
      {
        path: "/register",
        name: "register",
        component: () =>
          import("../views/register/register.vue")
      }
    ]
  }
]
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: commonRouter
});
