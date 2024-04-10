import { reactive, toRefs } from "vue";
import { useDebounceFn } from "@vueuse/core";

/**
 * @description table操作方法封装
 * @param {Function} api 表格列表数据接口
 * @param {Object} searchParam 表格查询参数
 */
export const useTable = (api, searchParam = {}, tableHead = []) => {
  const state = reactive({
    tableData: {
      loading: false,
      stripe: true,
      height: "100%",
      border: false,
      tableHead,
      tableBody: [],
      currentPage: 1,
      currentSize: 10,
      total: 200,
      pageSizes: [10, 20, 30, 40]
    }
  });

  // 获取表格列表数据
  const getTableData = async (
    params = {
      pageNum: state.tableData.currentPage,
      pageSize: state.tableData.currentSize,
      ...searchParam
    }
  ) => {
    state.tableData.loading = true;
    const res = await api(params).catch((e) => e);
    state.tableData.loading = false;
    if (res.status === 200) {
      state.tableData.tableBody = res.data.list;
    }
  };

  // 分页切换方法
  const handleSizeChange = (val) => {
    state.tableData.currentSize = val;
    getTableData();
  };

  const handlePageChange = (val) => {
    state.tableData.currentPage = val;
    getTableData();
  };

  // 表格数据搜索, 防抖(需安装lodash)
  const searchData = useDebounceFn((getTableData) => {
    getTableData();
  }, 500);

  // 返回相关变量与方法
  return {
    ...toRefs(state),
    getTableData,
    handleSizeChange,
    handlePageChange,
    searchData
  };
};
