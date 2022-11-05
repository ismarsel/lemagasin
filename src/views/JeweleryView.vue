<template>
  <category-title :title="categoryName" :quantity="quantity" />
  <section class="main-section category-section">
    <aside class="left-menu">
      <div>
        <nav class="left-nav">
          <ul class="left-nav__list category-menu">
            <li class="left-nav__list-item">
              <a href="" class="category-menu__link">Clothig</a>
            </li>
            <li class="left-nav__list-item">
              <a href="" class="category-menu__link">Shoes</a>
            </li>
            <li class="left-nav__list-item">
              <a href="" class="category-menu__link">Accessories</a>
            </li>
            <li class="left-nav__list-item">
              <a href="" class="category-menu__link">Premium</a>
            </li>
            <li class="left-nav__list-item">
              <a href="" class="category-menu__link">Sports</a>
            </li>
            <li class="left-nav__list-item">
              <a href="" class="category-menu__link">Beauty</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    <div class="catalog">
      <div class="catalog__filters">
        <div class="dropdown-filter">By rating</div>
        <div class="dropdown-filter">By price</div>
        <search-input />
      </div>
      <product-list />
    </div>
  </section>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import CategoryTitle from "@/components/CategoryTitle.vue";
import SearchInput from "@/components/UI/SearchInput.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "JeweleryView",
  components: {
    ProductList,
    SearchInput,
    CategoryTitle,
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
    ...mapMutations(["SORT_PRODUCTS"]),
    sortByHandle(option) {
      this.SORT_PRODUCTS(option);
    },
    consoleName() {
      console.log(this.name);
    },
  },
  created() {
    this.FETCH_PRODUCTS(this.categoryName);
  },
};
</script>

<style lang="scss" scoped></style>
