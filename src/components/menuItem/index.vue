<template>
  <template v-for="menu in props.menuList" :key="menu.id">
    <el-sub-menu
      v-if="menu && menu.children && menu.children.length"
      :index="menu.path"
    >
      <template #title>
        <el-icon>
          <component :is="menu.icon ? menu.icon.split('-icon-')[1] : ''" />
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>

      <menu-item :menuList="menu.children" />
    </el-sub-menu>

    <el-menu-item :index="menu.path" v-else>
      <el-icon>
        <component :is="menu.icon ? menu.icon.split('-icon-')[1] : ''" />
      </el-icon>
      <span>{{ menu.meta.title }}</span>
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
