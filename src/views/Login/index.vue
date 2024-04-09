<script setup>
import { User, Lock } from "@element-plus/icons-vue";
import { useLoginStore } from "@/store/Login";

const loginStore = useLoginStore();

const btnClick = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      loginStore.handleLogin();
    }
  });
};

const formRef = ref(null);
const loginForm = reactive({
  username: "",
  password: "",
  isAutoLogin: false
});

const rules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }]
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

      <el-form :rules="rules" :model="loginForm" ref="formRef">
        <el-form-item prop="username">
          <el-input
            class="h-10"
            v-model="loginForm.username"
            placeholder="请输入用户名称"
            :prefix-icon="User"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            class="h-10"
            v-model="loginForm.password"
            placeholder="请输入登录密码"
            :prefix-icon="Lock"
            type="password"
            show-password
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
