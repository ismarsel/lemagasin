<template>
  <h1 class="main-title category-title">
    {{ title.charAt(0).toLocaleUpperCase() + title.slice(1) }}
    <span class="products-count">{{ quantity }} units</span>
  </h1>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CategoryTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
    quantity: {
      type: Number,
      default: null,
    },
  },
  computed: {
    ...mapGetters(["GET_CATEGORY_TITLE"]),
  },
};
</script>

<style lang="scss" scoped></style>
