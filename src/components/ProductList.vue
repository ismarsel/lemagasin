<template>
  <div class="catalog__products products">
    <ul class="products-list">
      <product-list-item
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
  </div>
</template>

<script>
import ProductListItem from "@/components/ProductListItem.vue";

export default {
  name: "ProductList",
  components: {
    ProductListItem,
  },
  data() {
    return {};
  },
  props: {
    products: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
