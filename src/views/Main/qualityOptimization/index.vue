<script setup>
import singleComp from "./single/index.vue";
import multipleComp from "./multiple/index.vue";
import { setAsideTabKey } from "@/utils/setAsideTabKey";
import { getStorage, setStorage } from "@/utils/storage";
import { Search } from "@element-plus/icons-vue";

const tabs = ref([
  { label: "单钢卷", value: "单钢卷" },
  { label: "多钢卷", value: "多钢卷" }
]);
const CURRENTASIDETABKEY = setAsideTabKey();
const currentTab = ref(getStorage(CURRENTASIDETABKEY) || 0);
const tabClickc = (index) => {
  if (index === currentTab.value) return;
  currentTab.value = index;
  Object.keys(searchParams).forEach((key) => (searchParams[key] = ""));
  setStorage(CURRENTASIDETABKEY, index);
};

onBeforeRouteLeave(() => {
  setStorage(CURRENTASIDETABKEY, 0);
});

const searchParams = reactive({
  code: "",
  analysis: "",
  parameter: "",
  keywords: "",
  optimization: ""
});
const options = ref([
  {
    value: "Option1",
    label: "Option1"
  },
  {
    value: "Option2",
    label: "Option2"
  },
  {
    value: "Option3",
    label: "Option3"
  },
  {
    value: "Option4",
    label: "Option4"
  },
  {
    value: "Option5",
    label: "Option5"
  }
]);
</script>

<template>
  <div class="flex h-full">
    <div class="w-60 mr-4">
      <div class="flex flex-col h-full">
        <div
          class="h-[30px] bg-white mb-5 flex items-center rounded-lg border-[1px] border-solid border-[#D2DCE7]"
        >
          <template v-for="(tab, index) in tabs" :key="tab.value">
            <div
              class="flex-1 text-center hover:cursor-pointer transition-all"
              :class="[
                index === currentTab ? 'text-active-text' : 'text-primary-text',
                { 'border-r-[1px] border-solid border-[#D2DCE7]': index === 0 }
              ]"
              @click="tabClickc(index)"
            >
              {{ tab.label }}
            </div>
          </template>
        </div>
        <div class="flex-1 bg-white rounded-lg py-4 px-[10px] box-border">
          <div class="flex items-center">
            <el-input
              placeholder="请搜索选择钢卷号"
              :prefix-icon="Search"
              class="mr-[10px]"
              v-model="searchParams.code"
            ></el-input>

            <el-tooltip
              effect="dark"
              content="这里是提示语句"
              placement="right"
            >
              <el-icon size="16" color="#8593A7" class="hover:cursor-pointer">
                <Warning />
              </el-icon>
            </el-tooltip>
          </div>
          <div>
            <div class="asidePart">
              <div class="flex items-center h-full">
                <div class="w-[2px] h-full bg-[#2262FB] rounded-lg mr-2"></div>
                <div>工艺参数分析</div>
              </div>
              <div class="w-[1px] h-4 bg-[#90B1FF] rounded-lg"></div>
              <div class="text-[#2262FB] hover:cursor-pointer">查询</div>
            </div>
            <el-select
              v-model="searchParams.analysis"
              placeholder="请选择工段"
              clearable
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-input
              v-if="!currentTab"
              placeholder="请搜索选择工艺参数"
              v-model="searchParams.parameter"
              :prefix-icon="Search"
              class="mt-4"
            ></el-input>
          </div>
          <div>
            <div class="asidePart">
              <div class="flex items-center h-full">
                <div class="w-[2px] h-full bg-[#2262FB] rounded-lg mr-2"></div>
                <div>关键因素提取</div>
              </div>
              <div class="w-[1px] h-4 bg-[#90B1FF] rounded-lg"></div>
              <div class="text-[#2262FB] hover:cursor-pointer">查询</div>
            </div>
            <el-select
              v-model="searchParams.keywords"
              placeholder="请选择工段"
              clearable
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div>
            <div class="asidePart">
              <div class="flex items-center h-full">
                <div class="w-[2px] h-full bg-[#2262FB] rounded-lg mr-2"></div>
                <div>工艺参数优化</div>
              </div>
              <div class="w-[1px] h-4 bg-[#90B1FF] rounded-lg"></div>
              <div class="text-[#2262FB] hover:cursor-pointer">查询</div>
            </div>
            <el-select
              v-model="searchParams.optimization"
              placeholder="请选择算法"
              clearable
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 flex flex-col overflow-x-hidden">
      <div class="flex h-[30px] items-center mb-5">
        <img
          class="w-[30px] h-[30px] mr-2"
          src="@/assets/imgs/main/result.png"
          alt=""
        />
        <span class="text-lg text-[#35404F]">查询结果</span>
      </div>

      <div class="flex-1" v-if="!currentTab">
        <single-comp />
      </div>

      <div class="flex-1" v-else>
        <multiple-comp />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
