<template>
  <li class="products-list__item product-card">
    <a href="#" class="product-card__link">
      <img :src="product.image" />
      <span class="product-card__price">{{ product.price }} $</span>
      <span class="product-card__title">{{ product.title }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: "ProductListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
