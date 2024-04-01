import { useRoute } from "vue-router";

export const setAsideTabKey = () => {
  const route = useRoute();
  return route && route.name + "TABKEY";
};
