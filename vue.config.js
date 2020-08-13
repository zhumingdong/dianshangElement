/*
 * @Author: your name
 * @Date: 2020-06-11 15:44:23
 * @LastEditTime: 2020-06-11 19:30:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\app\vue.config.js
 */
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/": {
        target: "http://elm.cangdu.org", //代理接口
        changeOrigin: true,
      },
    },
  },
};
