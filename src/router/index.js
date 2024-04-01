import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { firstMenu } from "@/utils/mapMenuToRoutes";
import { clearStorage, getStorage } from "@/utils/storage";
import { EXPIRETIME, TOKENKEY } from "@/config/keys";

const routes = [
  { path: "/", redirect: "/main" },
  {
    path: "/main",
    name: "Main",
    meta: {
      name: "首页"
    },
    component: () => import("@/views/Main/index.vue")
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      name: "登录"
    },
    component: () => import("@/views/Login/index.vue")
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    meta: {
      name: "404"
    },
    component: () => import("@/views/NotFound/index.vue")
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

router.beforeEach(async (to, from) => {
  NProgress.start();
  document.title = to.meta.name;

  const TOKEN = getStorage(TOKENKEY);
  const EXPIRE_TIME = getStorage(EXPIRETIME);

  if (to.path !== "/login" && (!TOKEN || Date.now() > EXPIRE_TIME)) {
    // Token不存在或已过期，强制跳转到登录页面
    clearStorage();
    return "/login";
  }

  if (to.path === "/login" && TOKEN) {
    return "/main";
  }
  if (to.path === "/main" && firstMenu) {
    return firstMenu?.path;
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
