import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import AppLayout from "./layouts/AppLayout";
import "./assets/styles/main.css";
import "./assets/styles/media.css";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .component("AppLayout", AppLayout)
  .mount("#app");
