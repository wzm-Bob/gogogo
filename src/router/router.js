import Vue from "vue";
import Router from "vue-router";
import LoginLayout from "../public/loginLayout.vue";
import HomeLayout from "../public/homeLayout.vue";
import ModuleEntry from "../public/moduleEntry.vue";

Vue.use(Router);
/* 这里使用官方推荐的懒加载import */
// 不准忘记id:尝试
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
    meta: {title: '模塊頁'},
    component: ModuleEntry
  },
  {
    path: "/userCenter",
    name: "UserCenter",
    meta: {title: '用戶中心'},
     component: () =>
       import("../components/UserCenter/index.vue")
  },
  {
    path: "/ModuleEntry",
    name: "HomeLayout",
    component: HomeLayout,
    meta: {title: '首页'},
    redirect: '/dashboard/analysis',
    children: [{
        path: "/dashboard/analysis",
        name: "analysis",
        meta: {title: '分析頁'},
        component: () =>
          import("../views/dashboard/analysis.vue")
      },
      {
        path: "/dashboard/workplace",
        name: "workplace",
        meta: {title: '工作台'},
        component: () =>
          import("../views/dashboard/workplace.vue")
      },
      {
        path: "/dashboard/monitor",
        name: "monitor",
        meta: {title: '監控頁'},
        component: () =>
          import("../views/dashboard/monitor.vue")
      }
    ]
  },
  {
    path: "/ModuleEntry",
    name: "HomeLayout",
    component: HomeLayout,
    meta: {title: '首页'},
    redirect: '/list/excel',
    children: [{
        path: "/list/excel",
        name: "excel",
        meta: {title: '表格頁'},
        component: () =>
          import("../views/list/excel.vue")
      },
      {
        path: "/list/table",
        name: "table",
        meta: {title: '列表頁'},
        component: () =>
          import("../views/list/table.vue")
      },
      {
        // 冒号定制 正则匹配只能是数字
        path: "/list/article/:id(\\d+)",
        name: "article",
        meta: {
          title: '文章页'
        },
        component: () =>
          import("../views/list/article.vue")
      }
    ]
  }
]
export default new Router({
 /*  mode: "history",
  base: process.env.BASE_URL, */
  routes: commonRouter
});