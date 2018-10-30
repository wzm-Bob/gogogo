import Vue from "vue";
import Router from "vue-router";
import LoginLayout from "../public/loginLayout.vue";
import HomeLayout from "../public/homeLayout.vue";
import ModuleEntry from "../public/moduleEntry.vue";

Vue.use(Router);
/* 这里使用官方推荐的懒加载import */
export const commonRouter = [{
    path: "/",
    name: "LoginLayout",
    component: LoginLayout,
    redirect: '/login',
    children: [{
        path: "/login",
        name: "login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import( /* webpackChunkName: "about" */ "../views/login/login.vue")
      },
      {
        path: "/register",
        name: "register",
        component: () =>
          import("../views/register/register.vue")
      },
      {
        path: "/registerSuccess",
        name: "registerSuccess",
        component: () =>
          import("../views/register/registerSuccess.vue")
      }
    ]
  },
  {
    path: "/ModuleEntry",
    name: "ModuleEntry",
    component: ModuleEntry
  },
  {
    path: "/dashboard",
    name: "HomeLayout",
    component: HomeLayout,
    redirect: '/dashboard/workplace',
    children: [{
        path: "/dashboard/analysis",
        name: "analysis",
        component: () =>
          import("../views/dashboard/analysis.vue")
      },
      {
        path: "/dashboard/workplace",
        name: "workplace",
        component: () =>
          import("../views/dashboard/workplace.vue")
      },
      {
        path: "/dashboard/monitor",
        name: "monitor",
        component: () =>
          import("../views/dashboard/monitor.vue")
      }
    ]
  },
  {
    path: "/list",
    name: "HomeLayout",
    component: HomeLayout,
    redirect: '/list/excel',
    children: [{
        path: "/list/excel",
        name: "excel",
        component: () =>
          import("../views/list/excel.vue")
      },
      {
        path: "/list/table",
        name: "table",
        component: () =>
          import("../views/list/table.vue")
      }
    ]
  }
]
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: commonRouter
});