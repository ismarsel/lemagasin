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
import { mapActions, mapGetters, mapMutations } from "vuex";
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
    };
  },
  computed: {
    ...mapGetters(["GET_PRODUCTS"]),
  },
  methods: {
    ...mapActions(["FETCH_PRODUCTS", "SORT_PRODUCTS"]),
    ...mapMutations([]),
    selectHandle(option) {
      this.SORT_PRODUCTS(option);
      this.GET_PRODUCTS;
    },
  },
  created() {
    this.FETCH_PRODUCTS(this.categoryName);
  },
};
</script>

<style lang="scss" scoped></style>
