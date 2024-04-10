<template>
  <div class="h-full flex flex-col">
    <div class="flex-1 overflow-y-auto">
      <el-table
        ref="tableRef"
        v-loading="props.tableData.loading"
        style="width: 100%"
        :data="props.tableData.tableBody"
        :border="props.tableData.border"
        :height="props.tableData.height"
        :stripe="props.tableData.stripe"
        highlight-current-row
        element-loading-text="Loading..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(255, 255, 255, 0.8)"
        @selection-change="handleSelectionChange"
        :row-key="getRowKey"
      >
        <template v-for="item in props.tableData.tableHead" :key="item.label">
          <el-table-column
            v-if="item.type == 'index'"
            type="index"
            :align="item.align"
            :label="item.label"
            :width="item.width"
          ></el-table-column>

          <el-table-column
            v-else-if="item.type == 'selection'"
            :reserve-selection="true"
            type="selection"
            :align="item.align"
            :label="item.label"
            :width="item.width"
          ></el-table-column>

          <el-table-column
            v-else-if="item.type == 'img'"
            :align="item.align"
            :label="item.label"
            :width="item.width"
          >
            <template #default="slotProps">
              <el-image
                class="w-24 h-24 rounded-2xl object-cover cursor-pointer"
                :src="slotProps.row[item.prop]"
                :preview-src-list="[slotProps.row[item.prop]]"
                fit="cover"
                :preview-teleported="true"
              />
            </template>
          </el-table-column>

          <el-table-column
            v-else-if="item.type == 'button'"
            :label="item.label"
            :align="item.align"
            :width="item.width"
            :fixed="item.fixed"
          >
            <template #default="{ row, $index }">
              <slot name="button" :row="row" :index="$index"></slot>
            </template>
          </el-table-column>

          <el-table-column
            v-else-if="item.children && !item.children.length"
            :sortable="item.sortable"
            :width="item.width"
            :align="item.align"
            :prop="item.prop"
            :label="item.label"
            show-overflow-tooltip
          >
          </el-table-column>

          <el-table-column
            v-else-if="!item.children"
            :sortable="item.sortable"
            :width="item.width"
            :align="item.align"
            :prop="item.prop"
            :label="item.label"
            show-overflow-tooltip
          >
          </el-table-column>

          <el-table-column
            v-else
            :sortable="item.sortable"
            :width="item.width"
            :align="item.align"
            :prop="item.prop"
            :label="item.label"
            show-overflow-tooltip
          >
            <el-table-column
              v-for="child in item.children"
              :key="child.label"
              :sortable="child.sortable"
              :prop="child.prop"
              :label="child.label"
              :align="child.align"
              :width="child.width"
              show-overflow-tooltip
            >
            </el-table-column>
          </el-table-column>
        </template>
      </el-table>
    </div>

    <div class="h-10 flex items-center justify-end" v-show="isShowPagination">
      <el-pagination
        :current-page="props.tableData.currentPage"
        :page-size="props.tableData.currentSize"
        background
        small
        :page-sizes="props.tableData.pageSizes"
        layout="total, sizes, prev, pager, next, jumper"
        :total="props.tableData.total"
        @size-change="handleSizeChange"
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, onUpdated, nextTick } from "vue";
import Sortable from "sortablejs";
import { useDebounceFn } from "@vueuse/core";
const props = defineProps({
  tableData: {
    type: Object,
    default: () => ({})
  },
  isShowPagination: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits([
  "handleSizeChange",
  "handlePageChange",
  "handleSelectionChange",
  "handleShowAuditDetail",
  "dragColumn"
]);

const handleSizeChange = (newSize) => {
  emit("handleSizeChange", newSize);
};
const handlePageChange = (newPage) => {
  emit("handlePageChange", newPage);
};

const handleSelectionChange = (val) => {
  emit("handleSelectionChange", val);
};

const getRowKey = (row) => {
  return row.id;
};

onMounted(() => {
  nextTick(() => {
    startDrag();
  });
});

const startDrag = useDebounceFn(() => {
  const wrapper = document.querySelector(".el-table__header tr");
  Sortable.create(wrapper, {
    animation: 180,
    delay: 0,
    onEnd: (e) => {
      if (e.oldIndex === e.newIndex) return;
      emit("dragColumn", e.oldIndex, e.newIndex);
    }
  });
}, 300);
const tableRef = ref(null);
onUpdated(() => {
  nextTick(() => {
    tableRef.value.doLayout();
  });
});
</script>

<style scoped lang="less">
:deep(.el-table) {
  --el-table-header-bg-color: #f6f9ff;
  --el-table-header-text-color: #475669;
}
</style>
