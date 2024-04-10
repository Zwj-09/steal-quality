<script setup>
import { onMounted } from "vue";
import { Setting } from "@element-plus/icons-vue";

import myTable from "@/components/myTable/index.vue";
import { useTable } from "@/hooks/useTable";
import { getImgs } from "@/api/test";

onMounted(() => {
  getTableData();
});

const searchParams = ref({});
const tableHead = ref([
  {
    align: "center",
    label: "序号",
    type: "index",
    width: 80
  },
  {
    align: "center",
    label: "名字",
    prop: "name"
  },
  {
    align: "center",
    label: "价格",
    prop: "price_format"
  },
  {
    align: "center",
    label: "数量",
    prop: "reviews_count"
  },
  {
    align: "center",
    label: "评分",
    prop: "star_rating"
  },
  {
    align: "center",
    label: "颜色",
    prop: "star_rating_color"
  },
  {
    align: "center",
    label: "图片",
    prop: "picture_url",
    type: "img"
  },
  {
    align: "center",
    label: "操作",
    width: 400,
    fixed: "right",
    type: "button"
  }
]);
const { tableData, getTableData, handleSizeChange, handlePageChange } =
  useTable(getImgs, searchParams.value, tableHead.value);

const btnRef = ref(null);
const isOpen = ref(false);
</script>

<template>
  <div class="flex h-full">
    <div class="w-60 bg-white rounded-lg mr-4">侧边栏</div>
    <div class="flex-1 flex flex-col">
      <div class="flex items-center mb-5">
        <img
          class="w-[30px] h-[30px] mr-2"
          src="@/assets/imgs/main/result.png"
          alt=""
        />
        <span class="text-lg text-[#35404F]">查询结果</span>
      </div>
      <div
        class="flex-1 flex flex-col bg-white rounded-lg overflow-hidden py-3 px-6"
      >
        <div class="h-[30px] mb-5 text-right">
          <el-button
            v-permission="'set'"
            type="primary"
            :icon="Setting"
            :style="{
              background: '#2262FB'
            }"
            ref="btnRef"
            @click="isOpen = !isOpen"
          >
            设置
          </el-button>

          <el-tour v-model="isOpen" :mask="false">
            <el-tour-step
              placement="bottom-start"
              :target="btnRef?.$el"
              title="Upload File"
              description="Put you files here."
            />
          </el-tour>
        </div>

        <div class="flex-1 overflow-y-auto">
          <myTable
            :tableData="tableData"
            @handle-size-change="handleSizeChange"
            @handle-page-change="handlePageChange"
          >
            <template #button>
              <el-button type="primary">新增</el-button>
              <el-button type="primary">删除</el-button>
              <el-button type="primary">修改</el-button>
              <el-button type="primary">详情</el-button>
            </template>
          </myTable>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
