<script setup>
import factorsComp from "../components/multipleFactors";
import parameterComp from "../components/multipleParameter.vue";
</script>

<template>
  <div class="h-full flex flex-col rounded-lg overflow-hidden bg-red">
    <div class="flex-1 multipleSection overflow-hidden">
      <div class="mb-1">
        <el-icon color="#2262FB"><Postcard /></el-icon>
        <span class="align-top ml-2">铁损与工艺参数变化</span>
      </div>
      <div class="overflow-hidden">图表</div>
    </div>

    <div class="h-3/10 multipleSection mb-[10px] mt-[10px]">
      <factors-comp />
    </div>

    <div class="h-3/10 multipleSection">
      <parameter-comp />
    </div>
  </div>
</template>

<style lang="less" scoped></style>
