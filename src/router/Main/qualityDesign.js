const routes = [
  {
    path: "/design",
    name: "Design",
    meta: {
      name: "钢种质量设计"
    },
    component: () => import("@/views/Main/qualityDesign/index.vue")
  }
];

export default routes;
