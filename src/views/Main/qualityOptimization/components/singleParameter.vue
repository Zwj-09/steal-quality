<script setup>
import { Postcard } from "@element-plus/icons-vue";

// const params = {
//   target: [
//     { label: "目标铁损1", value: "目标铁损1" },
//     { label: "目标铁损2", value: "目标铁损2" },
//     { label: "目标铁损3", value: "目标铁损3" },
//     { label: "目标铁损4", value: "目标铁损4" },
//     { label: "目标铁损5", value: "目标铁损5" },
//     { label: "目标铁损6", value: "目标铁损6" }
//   ],
//   results: [
//     { label: "优化结果1", value: "优化结果1" },
//     { label: "优化结果2", value: "优化结果2" },
//     { label: "优化结果3", value: "优化结果3" },
//     { label: "优化结果4", value: "优化结果4" },
//     { label: "优化结果5", value: "优化结果5" },
//     { label: "优化结果6", value: "优化结果6" }
//   ]
// };

const tableData = reactive({
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
  tableBody: [
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
    }
  ]
});
</script>

<template>
  <div class="flex items-center justify-between h-[30px] mb-4">
    <div>
      <el-icon color="#2262FB"><Postcard /></el-icon>
      <span class="align-top ml-2">单钢卷工艺参数优化</span>
    </div>
  </div>

  <div class="flex-1 flex">
    <!-- <div class="w-32">
      <el-row class="borderHeader">
        <el-col>目标铁损</el-col>
      </el-row>
      <el-row class="h-10 borderHeader -mt-[1px]">
        <el-col>优化结果</el-col>
      </el-row>
    </div>
    <div class="flex-1 overflow-hidden">
      <div class="flex overflow-x-auto">
        <div class="borderBody" v-for="item in params.target" :key="item.value">
          {{ item.label }}
        </div>
      </div>
      <div class="flex">
        <div
          class="borderBody -mt-[1px]"
          v-for="item in params.results"
          :key="item.value"
        >
          {{ item.label }}
        </div>
      </div>
    </div> -->

    <el-table :data="tableData.tableBody" border>
      <!-- <el-table-column prop="target" label="目标铁损"></el-table-column> -->
      <!-- <el-table-column prop="results" label="优化结果"></el-table-column> -->
      <el-table-column
        v-for="item in tableData.tableHead"
        :label="item.label"
        :key="item.prop"
        align="center"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="less" scoped></style>
