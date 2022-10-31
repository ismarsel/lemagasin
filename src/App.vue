<template>
  <header-app />
  <router-view />
  <footer-app />
</template>
<script>
import HeaderApp from "@/components/HeaderApp.vue";
import FooterApp from "@/components/FooterApp.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>

<style lang="scss"></style>
