<template>
  <li class="products-list__item product-card">
    <a
      href=""
      class="product-card__link"
      @mouseover="isShowInfo = !isShowInfo"
      @mouseout="isShowInfo = !isShowInfo"
    >
      <img class="product-card__img" :src="product.image" alt="Men's jacket" />
      <div class="product-card__price">
        <span>{{ product.price }} $</span>
      </div>
      <div class="product-card__title">
        <h3>{{ product.title }}</h3>
      </div>
      <div
        class="product-card__info"
        v-if="isShowInfo"
        @mouseover="isShowInfo = !isShowInfo"
        @mouseout="isShowInfo = !isShowInfo"
      >
        <div class="size">
          Size:
          <ul class="size-list">
            <li class="size-list__item">42</li>
            <li class="size-list__item">44</li>
            <li class="size-list__item">46</li>
          </ul>
        </div>
        <div class="product-card__btns flex--spbetween">
          <button class="btn-reset product-card__btn">Show</button>
          <button class="btn-reset product-card__btn">Buy</button>
        </div>
      </div>
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
  data() {
    return {
      isShowInfo: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
