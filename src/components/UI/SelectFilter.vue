<template>
  <div class="select-filter">
    <span
      class="select-filter__option"
      v-for="(option, index) in options"
      :key="index"
      @click="$emit('sortBy', index)"
    >
      {{ options[index] }}
    </span>
  </div>
</template>

<script>
export default {
  name: "SelectFilter",
  data() {
    return {
      options: ["By rating", "Ascending prices", "Descending prices"],
      selected: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
