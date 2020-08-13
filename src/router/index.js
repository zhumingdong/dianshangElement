/*
 * @Author: your name
 * @Date: 2020-06-10 15:30:12
 * @LastEditTime: 2020-06-12 11:54:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\app\src\router\index.js
 */

import Vue from "vue";
import VueRouter from "vue-router";
/* import Home from "../views/Home.vue"; */

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue"),
        meta: [],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash", //改模式
  base: process.env.BASE_URL,
  routes,
});

export default router;
