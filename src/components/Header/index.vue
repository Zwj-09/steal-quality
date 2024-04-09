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
        <svg
          t="1712581555162"
          class="icon w-6 h-6"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5249"
          width="200"
          height="200"
        >
          <!-- fill="#8BAEF7" -->
          <path
            d="M966.829213 466.944L762.989213 290.24a61.76 61.76 0 0 0-40.896-15.168 60.096 60.096 0 0 0-61.504 58.88 57.92 57.92 0 0 0 20.352 43.84l85.376 74.048H395.821213a58.944 58.944 0 1 0 0 117.824h371.2l-85.376 74.048a57.6 57.6 0 0 0-20.352 43.712 60.16 60.16 0 0 0 61.12 59.008 62.592 62.592 0 0 0 40.896-15.168l203.84-176.704a57.6 57.6 0 0 0 0-87.744z"
            p-id="5250"
          ></path>
          <!-- fill="#467CFD" -->
          <path
            d="M420.589213 903.808H162.541213V117.76h258.176c35.584 0 64.576-26.368 64.576-58.88S456.429213 0 420.717213 0H97.965213C62.317213 0 33.389213 26.368 33.389213 58.88v903.872c0 32.512 28.864 58.88 64.576 58.88H420.589213c35.584 0 64.576-26.368 64.576-58.88s-28.864-58.944-64.576-58.944z"
            p-id="5251"
          ></path>
        </svg>
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
svg {
  path {
    fill: none;
    stroke: #2262fb;
    stroke-linecap: round;
    stroke-width: 20;
    stroke-dasharray: 20000;
    stroke-dashoffset: 20000;
    animation: flash 3s linear;
  }
}
@keyframes flash {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -20000;
  }
}
</style>
