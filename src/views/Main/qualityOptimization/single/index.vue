<script setup>
import factorsComp from "../components/singleFactors.vue";
import parameterComp from "../components/singleParameter.vue";
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="flex-1 flex overflow-hidden">
      <div class="w-1/3 h-full commonSection mr-[10px]">
        <div class="mb-5 h-6">
          <el-icon color="#2262FB"><Postcard /></el-icon>
          <span class="align-top ml-2">铁损与工艺参数变化</span>
        </div>
        <div class="flex-1">图表</div>
      </div>
      <div class="w-2/3 commonSection">
        <div class="mb-5 h-6">
          <el-icon color="#2262FB"><Postcard /></el-icon>
          <span class="align-top ml-2">不同铁损钢带公益分布参数直方图</span>
        </div>
        <div class="flex-1">图表</div>
      </div>
    </div>

    <div
      class="h-3/10 bg-white rounded-lg mb-[10px] mt-[10px] py-4 px-6 box-border flex flex-col"
    >
      <factors-comp />
    </div>

    <div class="h-3/10 bg-white rounded-lg py-4 px-6 box-border flex flex-col">
      <parameter-comp />
    </div>
  </div>
</template>

<style lang="less" scoped></style>
