<script setup>
import { Postcard } from "@element-plus/icons-vue";
import transformTable from "./transformTable.vue";

const tableData = reactive({
  isLoading: false,
  tableHead: [
    {
      label: "共性影响因素",
      prop: "target"
    },
    {
      label: "相关性系数",
      prop: "results"
    },
    {
      label: "排序",
      prop: "sort"
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
        target: "共性影响因素1",
        results: "相关性系数1",
        sort: "排序1"
      },
      {
        target: "共性影响因素2",
        results: "相关性系数2",
        sort: "排序2"
      },
      {
        target: "共性影响因素3",
        results: "相关性系数3",
        sort: "排序3"
      },
      {
        target: "共性影响因素4",
        results: "相关性系数4",
        sort: "排序4"
      },
      {
        target: "共性影响因素5",
        results: "相关性系数5",
        sort: "排序5"
      },
      {
        target: "共性影响因素6",
        results: "相关性系数6",
        sort: "排序6"
      },
      {
        target: "共性影响因素7",
        results: "相关性系数7",
        sort: "排序7"
      },
      {
        target: "共性影响因素8",
        results: "相关性系数8",
        sort: "排序8"
      },
      {
        target: "共性影响因素9",
        results: "相关性系数9",
        sort: "排序9"
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
