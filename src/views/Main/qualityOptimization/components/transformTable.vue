<script setup>
import { computed } from "vue";
const props = defineProps({
  tableData: {
    type: Object,
    default: () => ({})
  }
});

const getHeaders = computed(() => {
  return props.tableData.tableBody.reduce(
    (pre, cur, index) => pre.concat(`value${index}`),
    ["title"]
  );
});
const getValues = computed(() => {
  return props.tableData.tableHead.map((item) => {
    return props.tableData.tableBody.reduce(
      (pre, cur, index) =>
        Object.assign(pre, { ["value" + index]: cur[item.prop] }),
      { title: item.label }
    );
  });
});
</script>

<template>
  <el-table
    :data="getValues"
    border
    :show-header="false"
    style="width: 100%; height: 100%; overflow-x: auto"
    :show-overflow-tooltip="true"
    highlight-current-row
    v-loading="tableData.isLoading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 0.8)"
  >
    <el-table-column
      v-for="(item, index) in getHeaders"
      :label="item"
      :key="index"
      :prop="item"
      align="center"
      :width="tableData.tableBody.length <= 6 ? 'auto' : 200"
      :fixed="index === 0 ? 'left' : false"
    >
    </el-table-column>
  </el-table>
</template>

<style lang="less" scoped></style>
