<script setup>
import ingredientsComp from "./components/ingredients.vue";
import parameterComp from "./components/parameter.vue";
</script>

<template>
  <div class="flex h-full">
    <div class="w-60 bg-red-500 mr-4">11111</div>
    <div class="flex-1 flex flex-col">
      <div class="flex items-center mb-5">
        <img
          class="w-[30px] h-[30px] mr-2"
          src="@/assets/imgs/main/result.png"
          alt=""
        />
        <span class="text-lg text-[#35404F]">查询结果</span>
      </div>
      <div class="flex-1 flex flex-col rounded-lg overflow-hidden">
        <div
          class="h-2/5 bg-white rounded-lg py-4 px-6 box-border flex flex-col"
        >
          <ingredients-comp />
        </div>

        <div
          class="h-1/5 bg-white rounded-lg mb-[10px] mt-[10px] py-4 px-6 box-border flex flex-col overflow-hidden"
        >
          <div>
            <el-icon color="#2262FB"><Postcard /></el-icon>
            <span class="align-top ml-2">工艺路径设计</span>
          </div>
          <img
            class="h-full object-fill"
            src="@/assets/imgs/main/devise.png"
            alt=""
          />
        </div>

        <div
          class="h-2/5 bg-white rounded-lg py-4 px-6 box-border flex flex-col"
        >
          <parameter-comp />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
