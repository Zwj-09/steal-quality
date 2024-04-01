const routes = [
  {
    path: "/standar",
    name: "Standar",
    meta: {
      name: "钢种标准查询"
    },
    component: () => import("@/views/Main/standardInquire/index.vue")
  }
];

export default routes;
