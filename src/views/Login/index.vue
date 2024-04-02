<script setup>
import { User, Lock } from "@element-plus/icons-vue";
import { useLoginStore } from "@/store/Login";

const loginStore = useLoginStore();

const btnClick = () => {
  loginStore.handleLogin();
};

const loginForm = reactive({
  username: "",
  password: "",
  isAutoLogin: false
});
</script>

<template>
  <div
    class="w-screen h-screen flex items-center justify-center bg-login-bg bg-cover bg-no-repeat bg-center overflow-hidden"
  >
    <img class="w-[260px] h-[154px]" src="@/assets/imgs/login/logo.png" />

    <div class="w-[1px] h-[215px] bg-[#B8B8B8] ml-[59px] mr-[69px]"></div>
    <div class="w-[346px]">
      <div class="mb-5">
        <span class="text-base mr-1">用户登录</span>
        <span class="text-xs">USER LOGIN</span>
      </div>

      <el-form>
        <el-form-item>
          <el-input
            class="h-10"
            v-model="loginForm.username"
            placeholder="请输入用户名称"
            :prefix-icon="User"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            class="h-10"
            v-model="loginForm.password"
            placeholder="请输入登录密码"
            :prefix-icon="Lock"
          />
        </el-form-item>
      </el-form>

      <el-checkbox
        class="mb-4"
        v-model="loginForm.isAutoLogin"
        label="自动登录"
      />

      <el-button type="primary" @click="btnClick" class="w-full text-white">
        登录
      </el-button>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
