<script setup>
import { onMounted, reactive } from "vue";
import { Setting, Postcard } from "@element-plus/icons-vue";

onMounted(() => {
  getTableData();
});

const tableData = reactive({
  loading: false,
  stripe: true,
  // height: "100%",
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
      sortable: true
    },
    {
      align: "center",
      label: "标准名称",
      prop: "name"
    },
    {
      align: "center",
      label: "牌号",
      prop: "code"
    }
    // { align: "center", label: "操作", type: "button", width: 220 }
  ],
  tableBody: [],
  currentPage: 1,
  currentSize: 10,
  total: 200,
  pageSizes: [5, 10, 15, 20]
});

// 获取表单数据
const getTableData = () => {
  tableData.loading = true;
  tableData.tableBody = [
    {
      number: "Code-F4",
      name: "标准名称1",
      code: "TS-AA-B5"
    },
    {
      number: "Code-VA1",
      name: "标ssd准名称1",
      code: "TS-EE-B5"
    },
    {
      number: "Code-VA1",
      name: "标ssd准名称1",
      code: "TS-EE-B5"
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

const parameterTabs = ref([
  {
    label: "炼钢",
    value: "炼钢"
  },
  {
    label: "连铸",
    value: "连铸"
  },
  {
    label: "轧钢",
    value: "轧钢"
  }
]);

const currentTab = ref(0);
const handleTab = (index) => {
  if (index === currentTab.value) return;
  currentTab.value = index;
  getTableData();
};
</script>

<template>
  <div class="flex items-center justify-between h-[30px] mb-1">
    <div>
      <el-icon color="#2262FB"><Postcard /></el-icon>
      <span class="align-top ml-2">工艺参数设计</span>
    </div>

    <div class="flex items-center">
      <div class="flex items-center mr-4">
        <template v-for="(tab, index) in parameterTabs" :key="tab.value">
          <div
            class="border-[1px] border-[#D2DCE7] border-solid -mr-[1px] py-[5px] px-[21px] transition-all hover:cursor-pointer"
            :class="{
              activeTab: currentTab === index,
              'text-[#8593A7]': currentTab !== index
            }"
            @click="handleTab(index)"
          >
            {{ tab.label }}
          </div>
        </template>
      </div>

      <el-button
        type="primary"
        :icon="Setting"
        :style="{
          background: '#2262FB'
        }"
      >
        设置
      </el-button>
    </div>
  </div>

  <div class="flex-1 overflow-y-auto">
    <myTable
      :tableData="tableData"
      @handleSizeChange="handleSizeChange"
      @handlePageChange="handlePageChange"
    >
    </myTable>
  </div>
</template>

<style lang="less" scoped></style>
