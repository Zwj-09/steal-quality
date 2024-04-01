import { createApp } from "vue";
import App from "@/App.vue";
import "normalize.css";
import "@/assets/css/index.less";
import router from "@/router";
import { registerDirective } from "@/directives";
import pinia from "@/store";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
registerDirective(app);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(pinia).use(router).mount("#app");
