import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    // component: HomeView,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/MensClothing",
    name: "MensClothing",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MensClothingView.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/WomensClothing",
    name: "WomensClothing",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WomensClothingView.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/Electronics",
    name: "Electronics",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ElectronicsView.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
  {
    path: "/Jewelery",
    name: "Jewelery",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/JeweleryView.vue"),
    meta: {
      layout: "AppLayoutDefault",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
