const localRoutes = [];
const routes = [];

export const mapMenuToRoutes = (menus) => {
  const files = import.meta.glob("../router/Main/*.js", {
    eager: true
    // import: "default"
  });

  for (const key in files) {
    const module = files[key].default;
    if (module) localRoutes.push(...module);
  }

  mapMenus(menus);

  return routes;
};

export let firstMenu = null;

const mapMenus = (menus) => {
  for (const menu of menus) {
    if (menu.children && menu.children.length) {
      mapMenus(menu.children);
    } else {
      const route = localRoutes.find((item) => item.path === menu.path);
      if (route) {
        routes.push(route);
      }

      if (!firstMenu && route) {
        firstMenu = menu;
      }
    }
  }
};
