<template>
  <header-app />
  <main class="main">
    <div class="container">
      <category-title
        :title="GET_CURRENT_CATEGORY"
        :quantity="GET_PRODUCTS_LENGTH"
      />
      <section class="main-section category-section">
        <left-menu></left-menu>
        <slot />
      </section>
    </div>
  </main>
  <footer-app />
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import FooterApp from "@/components/FooterApp.vue";
import CategoryTitle from "@/components/CategoryTitle.vue";
import LeftMenu from "@/components/LeftMenu.vue";
import { mapGetters } from "vuex";
export default {
  name: "AppLayoutCatalog",
  components: {
    HeaderApp,
    FooterApp,
    CategoryTitle,
    LeftMenu,
  },
  computed: {
    ...mapGetters(["GET_PRODUCTS_LENGTH", "GET_CURRENT_CATEGORY"]),
  },
};
</script>

<style lang="scss" scoped></style>
