const routes = [
  {
    path: "/optimization",
    name: "Optimization",
    meta: {
      name: "钢种质量优化",
      index: 3
    },
    component: () => import("@/views/Main/qualityOptimization")
  }
];

export default routes;
