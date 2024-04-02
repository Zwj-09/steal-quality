<template>
  <template v-for="menu in props.menuList" :key="menu.id">
    <el-sub-menu
      v-if="menu && menu.children && menu.children.length"
      :index="menu.path"
    >
      <template #title>
        <el-icon :size="16">
          <component :is="menu.icon"></component>
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>

      <menu-item :menuList="menu.children" />
    </el-sub-menu>

    <el-menu-item :index="menu.path" v-else>
      <el-icon :size="16">
        <component :is="menu.icon"></component>
      </el-icon>
      <span>{{ menu.title }}</span>
    </el-menu-item>
  </template>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "menuItem"
});
</script>

<script setup>
const props = defineProps(["menuList"]);
</script>

<style scoped></style>
