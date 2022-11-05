<template>
  <li class="products-list__item product-card">
    <a
      href=""
      class="product-card__link"
      @mouseover="showInfo"
      @mouseleave="hideInfo"
    >
      <img class="product-card__img" :src="product.image" alt="Men's jacket" />
      <div class="product-card__price">
        <span>{{ product.price }} $</span>
      </div>
      <div class="product-card__title">
        <h3>{{ product.title }}</h3>
      </div>
      <div class="product-card__info" v-if="isShowInfo">
        <div class="size">
          Size:
          <ul class="size-list">
            <li class="size-list__item">42</li>
            <li class="size-list__item">44</li>
            <li class="size-list__item">46</li>
          </ul>
        </div>
        <button class="btn-reset product-card__btn">Show</button>
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
  /* methods: {
    showInfo() {
      this.isShowInfo = true;
    },
    hideInfo() {
      this.isShowInfo = false;
    },
  }, */
};
</script>

<style lang="scss" scoped></style>
