/*
 * @Author: your name
 * @Date: 2020-06-11 19:44:10
 * @LastEditTime: 2020-06-12 13:12:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\app\src\store\index.js
 */

import Vue from "vue";
import Vuex from "vuex";
import { getAdminInfo } from "@/api/getData";

Vue.use(Vuex);

const state = {
  adminInfo: {
    avatar: "default.jpg",
  },
};

const mutations = {
  saveAdminInfo(state, adminInfo) {
    state.adminInfo = adminInfo;
  },
};

const actions = {
  async getAdminData({ commit }) {
    try {
      const res = await getAdminInfo();
      if (res.status == 1) {
        commit("saveAdminInfo", res.data);
      } else {
        throw new Error(res.type);
      }
    } catch (err) {
      // console.log(err.message)
    }
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  // modules,
});
