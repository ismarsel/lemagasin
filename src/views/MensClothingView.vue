<template>
  <products-list :products="products"></products-list>
</template>

<script>
export default {
  name: "MensClothing",
  data() {
    return {
      products: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
