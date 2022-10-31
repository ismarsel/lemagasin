<template>
  <section class="category">
    <div class="container">
      <div class="flex--spbetween">
        <h1 class="category__title">{{categoryIs}}<span class="products-count">{{quantity}} units</span></h1>
        <select-filter />
        <search-input />
      </div>
      <ul class="products-list">
        <product-list-item v-for="product in products" :key="product.id" />
      </ul>
    </div>
  </section>
</template>

<script>
import ProductListItem from '@/components/ProductListItem.vue';
import SelectFilter from '@/components/SelectFilter.vue';
import SearchInput from '@/components/SearchInput.vue';
import SearchInput from './UI/SearchInput.vue';
  export default {
    name: 'ProductList',
    components: {
      ProductListItem,
      SelectFilter,
      SearchInput,
      SearchInput
    },
    data() {
      return {
        products: [],
      }
    },
    computed: {
      categoryIs() {
        if (!this.products) return
        return this.products[0].category
      },
      quantity() {
        if (!this.products) return
        return this.products.length
      }
    },
  }
</script>

<style lang="scss" scoped>
  
</style>