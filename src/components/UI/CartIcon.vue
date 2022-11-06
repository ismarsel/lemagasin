<template>
  <a href="#" class="cart flex">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        stroke="#888"
        d="M11 9.5h10.5l-1.5 11H4l-1.5-11h4.917M16.5 14V8c0-2.485-2.015-4.5-4.5-4.5S7.5 5.515 7.5 8v6"
      />
    </svg>
    <span>Cart</span>
    <span class="cart__count"> 12 </span>
  </a>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartIcon",
  computed: {
    ...mapGetters["GET_CART_PRODUCTS"],
  },
};
</script>

<style lang="scss" scoped></style>
