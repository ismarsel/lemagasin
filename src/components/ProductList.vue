<template>
  <div class="catalog__products products">
    <ul class="products-list">
      <product-list-item
        v-for="product in GET_PRODUCTS"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>

<script>
import ProductListItem from "@/components/ProductListItem.vue";

import { mapGetters } from "vuex";
export default {
  name: "ProductList",
  components: {
    ProductListItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["GET_PRODUCTS"]),
  },
};
</script>

<style lang="scss" scoped></style>
