<script setup>
import { useLoginStore } from "@/store/Login";
import menuItem from "@/components/menuItem/index.vue";

const navList = ref([
  {
    title: "钢种标准查询",
    value: "钢种标准查询",
    icon: "CirclePlus",
    url: "/standar"
  },
  {
    title: "钢种质量设计",
    value: "钢种质量设计",
    icon: "Loading",
    url: "/design"
  },
  {
    title: "钢种质量优化",
    value: "钢种质量优化",
    icon: "Tools",
    url: "/optimization"
  }
]);

const loginStore = useLoginStore();
const loginOut = () => {
  loginStore.handleLogOut();
};
</script>

<template>
  <header class="h-16 bg-white flex items-center">
    <div class="w-[271px] flex items-center justify-center mr-6">
      <img class="w-[163px]" src="@/assets/imgs/main/logo.png" alt="" />
    </div>
    <div class="flex-1 flex items-center justify-between pr-4">
      <el-menu
        :default-active="$route.path"
        mode="horizontal"
        :ellipsis="false"
        router
        active-text-color="rgba(34, 98, 251, 1)"
        text-color="rgba(53, 64, 79, 1)"
      >
        <menu-item :menuList="navList" />

        <!-- <template v-for="item in navList" :key="item.value">
          <el-menu-item :index="item.url">
            <template #title>
              <el-icon :size="16">
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
          </el-menu-item>
        </template> -->
      </el-menu>

      <div class="text-red-500 hover:cursor-pointer" @click="loginOut">
        退出登录
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped></style>
