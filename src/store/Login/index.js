import { ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import { mapMenuToRoutes } from "@/utils/mapMenuToRoutes";
import { getStorage, setStorage } from "@/utils/storage";
import { MENUKEY, TOKENKEY } from "@/config/keys";
import { EXPIRETIME } from "../../config/keys";

export const useLoginStore = defineStore("login", () => {
  const token = ref("");
  const menus = ref([
    {
      path: "/standar",
      name: "Standar"
    },
    { path: "/design", name: "Design" },
    {
      path: "/optimization",
      name: "Optimization"
    }
  ]);

  const handleLogin = () => {
    return new Promise((resolve) => {
      setStorage(
        TOKENKEY,
        "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2tleSI6ImQ4M2E5MWY2LTcxZTEtNDExYy05MjkwLTFhMjZhYzllZTBiYyIsInVzZXJuYW1lIjoiYWRtaW4ifQ.M_MHQGPyNYGoYF9ZejwMS4h66Eyr3MJaDrW7UvqHTOiTW3Fzsix_s9DNNN6eLrYEuGKcT0UeIsScOtmhS_y7aw"
      );
      setStorage(MENUKEY, menus.value);

      // 设置 24小时过期
      const expireTime = Date.now() + 24 * 60 * 60 * 1000;
      setStorage(EXPIRETIME, expireTime);

      // 动态添加路由
      const routes = mapMenuToRoutes(menus.value);

      routes.forEach((route) => {
        router.addRoute("Main", route);
      });

      resolve(true);

      router.push("/main");
    });
  };

  const loadCache = () => {
    const TOKEN = getStorage(TOKENKEY);
    const MENUS = getStorage(MENUKEY);

    if (TOKEN && MENUS) {
      token.value = TOKEN;
      menus.value = MENUS;

      const routes = mapMenuToRoutes(MENUS);
      routes.forEach((route) => {
        router.addRoute("Main", route);
      });
    }
  };

  return {
    token,
    handleLogin,
    loadCache
  };
});
