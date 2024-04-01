<script setup>
const navList = ref([
  {
    label: "钢种标准查询",
    value: "钢种标准查询",
    icon: "CirclePlus",
    url: "/standar"
  },
  {
    label: "钢种质量设计",
    value: "钢种质量设计",
    icon: "Loading",
    url: "/design"
  },
  {
    label: "钢种质量优化",
    value: "钢种质量优化",
    icon: "Tools",
    url: "/optimization"
  }
]);
</script>

<template>
  <header class="h-16 bg-white flex items-center">
    <div class="w-[271px] flex items-center justify-center mr-4">
      <img class="w-[163px]" src="@/assets/imgs/main/logo.png" alt="" />
    </div>
    <el-menu
      :default-active="$route.path"
      mode="horizontal"
      :ellipsis="false"
      router
      active-text-color="rgba(34, 98, 251, 1)"
      text-color="rgba(53, 64, 79, 1)"
    >
      <template v-for="item in navList" :key="item.value">
        <el-menu-item :index="item.url">
          <template #title>
            <el-icon :size="16">
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.label }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </header>
</template>

<style lang="less" scoped></style>
