<template>
  <div class="h-full flex flex-col">
    <div class="flex-1 overflow-y-auto">
      <!-- 表单 -->
      <el-table
        v-loading="props.tableData.loading"
        style="width: 100%"
        :data="props.tableData.tableBody"
        :border="props.tableData.border"
        :height="props.tableData.height"
        :stripe="props.tableData.stripe"
        highlight-current-row
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(255, 255, 255, 0.8)"
        @selection-change="handleSelectionChange"
        :row-key="getRowKey"
      >
        <!-- :row-key="getRowKey"、 :reserve-selection="true" 实现分页记录选中 -->
        <template v-for="item in props.tableData.tableHead" :key="item.label">
          <!-- 序号 -->
          <el-table-column
            v-if="item.type == 'index'"
            type="index"
            :align="item.align"
            :label="item.label"
            :width="item.width"
          ></el-table-column>

          <!-- 多选 -->
          <el-table-column
            v-else-if="item.type == 'selection'"
            :reserve-selection="true"
            type="selection"
            :align="item.align"
            :label="item.label"
            :width="item.width"
          ></el-table-column>

          <!-- 字典 根据code 展示文字 -->
          <el-table-column
            v-else-if="item.type == 'dict'"
            :align="item.align"
            :label="item.label"
            :width="item.width"
          >
            <template #default="slotProps">
              <el-tag
                v-if="item.isSetBg"
                :type="
                  slotProps.row[item.prop] == 1
                    ? 'success'
                    : slotProps.row[item.prop] == 0
                      ? 'danger'
                      : 'warning'
                "
              >
                {{
                  item.codes.find((obj) => obj.code == slotProps.row[item.prop])
                    ?.name
                }}
              </el-tag>

              <span v-else>
                {{
                  item.codes.find((obj) => obj.code == slotProps.row[item.prop])
                    ?.name
                }}
              </span>
            </template>
          </el-table-column>

          <!-- link -->
          <el-table-column
            v-else-if="item.type == 'link'"
            :align="item.align"
            :label="item.label"
            :width="item.width"
          >
            <template #default="slotProps">
              <a
                :href="slotProps.row[item.prop]"
                alt="链接已失效"
                target="_blank"
              >
                跳转地址
              </a>
            </template>
          </el-table-column>

          <el-table-column
            v-else-if="item.type == 'checkbox'"
            :label="item.label"
            :align="item.align"
            :width="item.width"
            :fixed="item.fixed"
          >
            <template #default="{ row }">
              <template v-for="t in row[item.prop]" :key="t.code">
                <span class="type" v-if="item.codes.find((i) => i.code == t)">
                  {{ item.codes.find((i) => i.code == t)?.name }}
                </span>
              </template>
            </template>
          </el-table-column>

          <el-table-column
            v-else-if="item.type == 'switch'"
            :label="item.label"
            :align="item.align"
            :width="item.width"
            :fixed="item.fixed"
          >
            <template #default="{ row, $index }">
              <slot name="switch" :row="row" :index="$index"></slot>
            </template>
          </el-table-column>

          <!-- 操作 -->
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

          <!-- 表格数据 -->
          <el-table-column
            v-else
            :sortable="item.sortable"
            :width="item.width"
            :align="item.align"
            :prop="item.prop"
            :label="item.label"
            show-overflow-tooltip
          >
          </el-table-column>
        </template>
      </el-table>
    </div>

    <!-- 分页 -->
    <div
      class="pagination h-10 flex items-center justify-end"
      v-if="isShowPagination"
    >
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
const props = defineProps({
  tableData: {
    type: Object,
    default: () => {
      return {};
    }
  },
  isShowPagination: {
    type: Boolean,
    default: true
  }
});

// 传递给父组件
const emit = defineEmits([
  "handleSizeChange",
  "handlePageChange",
  "handleSelectionChange",
  "handleShowAuditDetail"
]);

// 分页功能
const handleSizeChange = (newSize) => {
  emit("handleSizeChange", newSize);
};
const handlePageChange = (newPage) => {
  emit("handlePageChange", newPage);
};

// 多选
const handleSelectionChange = (val) => {
  emit("handleSelectionChange", val);
};

const getRowKey = (row) => {
  return row.id;
};
</script>

<style scoped lang="less"></style>
