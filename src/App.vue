<!--
 * @Author: your name
 * @Date: 2020-06-10 15:29:18
 * @LastEditTime: 2020-06-11 15:11:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\app\src\App.vue
-->
<template>
  <div id="app" class="fillcontain">
    <!--    <img src="./assets/logo.png" /> -->

    <!--   <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
      </p>
      <el-button>el-button</el-button>
    </div>-->
    <!--   <router-link to="/about">about</router-link>
    <router-link to="/">Home</router-link>-->
    <!--  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
/* import HelloWorld from "./components/HelloWorld.vue"; */

export default {
  name: "app",
  components: {
    /*   HelloWorld */
  },
};
</script>

<style lang="less">
@import "./style/common";
</style>
