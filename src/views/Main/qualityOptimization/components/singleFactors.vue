<script setup>
import { Postcard } from "@element-plus/icons-vue";

const params = {
  factors: [
    { label: "影响因素1", value: "影响因素1" },
    { label: "影响因素2", value: "影响因素2" },
    { label: "影响因素3", value: "影响因素3" },
    { label: "影响因素4", value: "影响因素4" },
    { label: "影响因素5", value: "影响因素5" },
    { label: "影响因素6", value: "影响因素6" }
  ],
  coefficient: [
    { label: "相关性系数1", value: "相关性系数1" },
    { label: "相关性系数2", value: "相关性系数2" },
    { label: "相关性系数3", value: "相关性系数3" },
    { label: "相关性系数4", value: "相关性系数4" },
    { label: "相关性系数5", value: "相关性系数5" },
    { label: "相关性系数6", value: "相关性系数6" }
  ],
  sorts: [
    { label: "排序1", value: "排序1" },
    { label: "排序2", value: "排序2" },
    { label: "排序3", value: "排序3" },
    { label: "排序4", value: "排序4" },
    { label: "排序5", value: "排序5" },
    { label: "排序6", value: "排序6" }
  ]
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
    <div class="w-32">
      <el-row class="h-10 borderHeader">
        <el-col>共性影响因素</el-col>
      </el-row>
      <el-row class="h-10 borderHeader -mt-[1px]">
        <el-col>相关性系数</el-col>
      </el-row>
      <el-row class="h-10 borderHeader -mt-[1px]">
        <el-col>排序</el-col>
      </el-row>
    </div>
    <div class="flex-1 overflow-hidden">
      <div class="w-full overflow-x-auto">
        <div class="flex">
          <div
            class="borderBody"
            v-for="item in params.factors"
            :key="item.value"
          >
            {{ item.label }}
          </div>
        </div>
        <div class="flex">
          <div
            class="borderBody -mt-[1px]"
            v-for="item in params.coefficient"
            :key="item.value"
          >
            {{ item.label }}
          </div>
        </div>
        <div class="flex">
          <div
            class="borderBody -mt-[1px]"
            v-for="item in params.sorts"
            :key="item.value"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
