<script setup>
import { computed } from "vue";
import { useDebounceFn } from "@vueuse/core";
const props = defineProps({
  tableData: {
    type: Object,
    default: () => ({})
  }
});

const getHeaders = computed(() => {
  return props.tableData.tableBody.reduce(
    (pre, cur, index) => pre.concat(`value${index}`),
    ["title"]
  );
});
const getValues = computed(() => {
  return props.tableData.tableHead.map((item) => {
    return props.tableData.tableBody.reduce(
      (pre, cur, index) =>
        Object.assign(pre, { ["value" + index]: cur[item.prop] }),
      { title: item.label }
    );
  });
});

const scrollRef = ref(null);
const scrollTo = useDebounceFn((offset) => {
  scrollRef.value &&
    scrollRef.value.scrollTo({ left: offset, behavior: "smooth" });
}, 10);

const dratData = reactive({
  isDraging: false,
  startOffsetX: 0,
  endOffSetX: 0
});
const handleMouseDown = (event) => {
  dratData.isDraging = true;
  dratData.startOffsetX = event.offsetX;
};
const handleMouseUp = (event) => {
  dratData.isDraging = false;
  dratData.endOffSetX = event.offsetX;
};
const handleMouseMove = (event) => {
  if (dratData.isDraging) {
    const offset = event.offsetX - dratData.startOffsetX;
    scrollTo(offset);
  }
};
</script>

<template>
  <div class="scrollRef w-full overflow-x-auto" :draggable="true">
    <el-table
      :data="getValues"
      :draggable="true"
      border
      :show-header="false"
      style="width: 100%; height: 100%; overflow-x: auto"
      :show-overflow-tooltip="true"
      highlight-current-row
      v-loading="tableData.isLoading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(255, 255, 255, 0.8)"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
    >
      <el-table-column
        v-for="(item, index) in getHeaders"
        :label="item"
        :key="index"
        :prop="item"
        align="center"
        :width="tableData.tableBody.length <= 6 ? 'auto' : 200"
        :fixed="index === 0 ? 'left' : false"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="less" scoped></style>
