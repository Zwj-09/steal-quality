<script setup>
import { Postcard } from "@element-plus/icons-vue";
import transformTable from "./transformTable.vue";

const tableData = reactive({
  isLoading: false,
  tableHead: [
    {
      label: "目标铁损",
      prop: "target"
    },
    {
      label: "优化结果",
      prop: "results"
    }
  ],
  tableBody: []
});

onMounted(() => {
  getTableData();
});

const getTableData = () => {
  return new Promise((resolve) => {
    tableData.isLoading = true;
    tableData.tableBody = [
      {
        target: "目标铁损1",
        results: "优化结果1"
      },
      {
        target: "目标铁损2",
        results: "优化结果2"
      },
      {
        target: "目标铁损3",
        results: "优化结果3"
      },
      {
        target: "目标铁损4",
        results: "优化结果4"
      },
      {
        target: "目标铁损5",
        results: "优化结果5"
      },
      {
        target: "目标铁损6",
        results: "优化结果6"
      },
      {
        target: "目标铁损7",
        results: "优化结果7"
      },
      {
        target: "目标铁损8",
        results: "优化结果8"
      },
      {
        target: "目标铁损9",
        results: "优化结果9"
      },
      {
        target: "目标铁损10",
        results: "优化结果10"
      }
    ];
    setTimeout(() => {
      tableData.isLoading = false;
    }, 1000);
  });
};
</script>

<template>
  <div class="flex items-center justify-between h-[30px] mb-4">
    <div>
      <el-icon color="#2262FB"><Postcard /></el-icon>
      <span class="align-top ml-2">单钢卷工艺参数优化</span>
    </div>
  </div>

  <div class="flex-1 flex">
    <transformTable :table-data="tableData" />
  </div>
</template>

<style lang="less" scoped></style>
