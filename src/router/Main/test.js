const routes = [
  {
    path: "/test",
    name: "Test",
    meta: {
      name: "测试动态表格",
      index: 3
    },
    component: () => import("@/views/Main/test/index.vue")
  }
];

export default routes;
