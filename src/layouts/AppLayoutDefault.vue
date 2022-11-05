<template>
  <header-app />
  <main class="main">
    <div class="container">
      <slot />
    </div>
  </main>
  <footer-app />
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import FooterApp from "@/components/FooterApp.vue";
export default {
  name: "AppLayoutDefault",
  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>

<style lang="scss" scoped></style>
