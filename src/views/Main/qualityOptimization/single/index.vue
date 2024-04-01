<script setup>
import factorsComp from "../components/singleFactors.vue";
import parameterComp from "../components/singleParameter.vue";
</script>

<template>
  <div class="h-full flex flex-col rounded-lg overflow-hidden bg-red">
    <div
      class="flex-1 bg-white rounded-lg py-4 px-6 box-border flex flex-col overflow-hidden"
    >
      <div>
        <el-icon color="#2262FB"><Postcard /></el-icon>
        <span class="align-top ml-2">铁损与工艺参数变化</span>
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
