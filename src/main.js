/*
 * @Author: your name
 * @Date: 2020-06-10 15:29:18
 * @LastEditTime: 2020-06-12 08:49:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \element\app\src\main.js
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import store from "./store/";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
