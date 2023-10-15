import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserLayout from "@/layout/UserLayout.vue";
import UserLoginView from "@/views/User/UserLoginView.vue";
import UserRegisterView from "@/views/User/UserRegisterView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
    meta: {
      hide: true,
    },
  },

  {
    path: "/",
    name: "浏览题目",
    component: HomeView,
  },

  {
    path: "/hide",
    name: "隐藏路由",
    component: HomeView,
    meta: {
      hide: true,
    },
  },

  {
    path: "/noAuth",
    name: "没有权限",
    component: () => import("@/views/NoAuthView.vue"),
  },

  // {
  //   path: "/admin",
  //   name: "仅管理员可见",
  //   // 这种=>是懒加载、异步加载，当用户导航到另一个路由时，该路由对应的组件才会被加载，这样可以保证用户在初次加载时的速度体验。
  //   component: () => import("@/views/AdminView.vue"),
  //   meta: {
  //     access: authEnum.ADMIN,
  //   },
  // },
  // {
  //   path: "/about",
  //   name: "关于我的",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

export default routes;
