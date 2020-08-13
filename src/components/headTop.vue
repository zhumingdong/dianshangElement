<!--
 * @Author: your name
 * @Date: 2020-06-11 15:27:13
 * @LastEditTime: 2020-06-15 17:10:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element\app\src\components\headTop.vue
-->
<template>
  <div class="header_container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/about' }">首页1</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>

    <el-dropdown @command="handleCommend">
      <img :src="baseImgPath + adminInfo.avatar" class="avator" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="signout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { signout } from "@/api/getData";
import { baseImgPath } from "@/config/env";
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["adminInfo"]),
  },
  data() {
    return {
      baseImgPath,
    };
  },
  created() {
    if (this.adminInfo.id) {
      this.getAdminData();
    }
  },
  methods: {
    ...mapActions(["getSevenData"]),
    async handleCommend(command) {
      // console.log(command);
      if (command == "home") {
        this.$router.push("/about");
      } else if (command == "signout") {
        const res = await signout();
        if (res.status == 1) {
          this.$message({
            type: "success",
            message: "退出成功",
          });
          this.$router.push("/");
        } else {
          this.$message({
            type: "error",
            message: res.message,
          });
        }
      }
    },
  },
};
</script>

<style lang="less">
@import "../style/mixin";
.header_container {
  background-color: #eff2f7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.avator {
  .wh(36px, 36px);
  border-radius: 50%;
  margin-right: 37px;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
