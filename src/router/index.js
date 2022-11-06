import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomeView",
    // component: HomeView,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/MensClothing",
    name: "MensClothingView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MensClothingView.vue"),
    meta: {
      layout: "AppLayoutCatalog",
    },
  },
  {
    path: "/WomensClothing",
    name: "WomensClothingView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WomensClothingView.vue"),
    meta: {
      layout: "AppLayoutCatalog",
    },
  },
  {
    path: "/Electronics",
    name: "ElectronicsView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ElectronicsView.vue"),
    meta: {
      layout: "AppLayoutCatalog",
    },
  },
  {
    path: "/Jewelery",
    name: "JeweleryView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/JeweleryView.vue"),
    meta: {
      layout: "AppLayoutCatalog",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
