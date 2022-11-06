<template>
  <div class="catalog">
    <div class="catalog__filters">
      <select-filter @selectOption="selectHandle" />
      <search-input />
    </div>
    <product-list :products="GET_PRODUCTS" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import SearchInput from "@/components/UI/SearchInput.vue";
import SelectFilter from "@/components/UI/SelectFilter.vue";
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "ElectronicsView",
  components: {
    ProductList,
    SearchInput,
    SelectFilter,
  },
  data() {
    return {
      categoryName: "electronics",
      sortedProducts: [],
    };
  },
  computed: {
    ...mapGetters(["GET_PRODUCTS"]),
  },
  methods: {
    ...mapActions(["FETCH_PRODUCTS"]),
    ...mapMutations(["SORT_PRODUCTS_STATE"]),
    selectHandle(option) {
      this.SORT_PRODUCTS_STATE(option);
    },
  },
  created() {
    this.FETCH_PRODUCTS(this.categoryName);
  },
};
</script>

<style lang="scss" scoped></style>
