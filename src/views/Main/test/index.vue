<script setup>
import { onMounted, reactive } from "vue";
import { Setting } from "@element-plus/icons-vue";

import myTable from "@/components/myTable/index.vue";

onMounted(() => {
  getTableData();
});

const tableData = reactive({
  loading: false,
  stripe: true,
  height: "100%",
  border: false,
  tableHead: [
    {
      align: "center",
      label: "序号",
      type: "index",
      width: 80
    },
    {
      align: "center",
      label: "标准号",
      prop: "number",
      sortable: false,
      children: [
        {
          align: "center",
          label: "标准号11",
          prop: "number11"
        },
        {
          align: "center",
          label: "标准号12",
          prop: "number12",
          children: [
            {
              align: "center",
              label: "标准号123",
              prop: "number123"
            },
            {
              align: "center",
              label: "标准号124",
              prop: "number124"
            }
          ]
        }
      ]
    },
    {
      align: "center",
      label: "标准名称",
      prop: "name",
      children: []
    },
    {
      align: "center",
      label: "牌号",
      prop: "code",
      children: []
    }
    // { align: "center", label: "操作", type: "button", width: 220 }
  ],
  tableBody: [],
  currentPage: 1,
  currentSize: 10,
  total: 200,
  pageSizes: [10, 20, 30, 40]
});

// 获取表单数据
const getTableData = () => {
  tableData.loading = true;
  tableData.tableBody = [
    {
      id: 1,
      number: "Code-F4",
      name: "标准名称1",
      code: "TS-AA-B5",
      number11: "Number 11 Value",
      number12: "Number 12 Value",
      number123: "number123",
      number124: "number124"
    },
    {
      id: 2,
      number: "Code-VA1",
      name: "标ssd准名称1",
      code: "TS-EE-B5",
      number11: "Number 11 Value",
      number12: "Number 12 Value",
      number123: "number123",
      number124: "number124"
    },
    {
      id: 3,
      number: "Code-AC1",
      name: "标aa准名称1",
      code: "TS-CC-B5",
      number11: "Number 11 Value",
      number12: "Number 12 Value",
      number123: "number123",
      number124: "number124"
    },
    {
      id: 4,
      number: "Code-AG1",
      name: "标准c名d称1",
      code: "TS-DD-B5",
      number11: "Number 11 Value",
      number12: "Number 12 Value",
      number123: "number123",
      number124: "number124"
    },
    {
      id: 5,
      number: "Code-A1",
      name: "标准名c称1",
      code: "TS-GG-B5",
      number11: "Number 11 Value",
      number12: "Number 12 Value",
      number123: "number123",
      number124: "number124"
    }
  ];
  setTimeout(() => {
    tableData.loading = false;
  }, 1000);
};

// 分页
const handleSizeChange = (newSize) => {
  tableData.currentSize = newSize;
  getTableData();
};
const handlePageChange = (newPage) => {
  tableData.currentPage = newPage;
  getTableData();
};

const dragColumn = (oldIndex, newIndex) => {
  const oldColumn = tableData.tableHead[oldIndex];
  tableData.tableHead.splice(oldIndex, 1);
  tableData.tableHead.splice(newIndex, 0, oldColumn);
};
</script>

<template>
  <div class="flex h-full">
    <div class="w-60 bg-red-500 mr-4">侧边栏</div>
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
          >
            设置
          </el-button>
        </div>

        <div class="flex-1 overflow-y-auto">
          <myTable
            :tableData="tableData"
            @handleSizeChange="handleSizeChange"
            @handlePageChange="handlePageChange"
            @dragColumn="dragColumn"
          >
          </myTable>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
