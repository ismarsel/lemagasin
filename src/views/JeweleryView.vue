<template>
  <div class="category">
    <div class="container">
      <div class="flex--spbetween">
        <h1 class="category__title">
          Jewelery
          <span class="products-count">{{ this.quantity }} units</span>
        </h1>
        <select-filter />
        <search-input />
      </div>
      <product-list />
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import SelectFilter from "@/components/UI/SelectFilter.vue";
import SearchInput from "@/components/UI/SearchInput.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "JeweleryView",
  components: {
    ProductList,
    SelectFilter,
    SearchInput,
  },
  data() {
    return {
      categoryName: "jewelery",
    };
  },
  computed: {
    ...mapGetters(["GET_PRODUCTS"]),
    quantity() {
      return this.GET_PRODUCTS.length;
    },
  },
  methods: {
    ...mapActions(["FETCH_PRODUCTS"]),
  },
  created() {
    this.FETCH_PRODUCTS(this.categoryName);
  },
};
</script>

<style lang="scss" scoped></style>
