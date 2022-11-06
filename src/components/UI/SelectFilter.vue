<template>
  <div class="dropdown-filter" @click="isOptionsShow = !isOptionsShow">
    {{ selected }}
    <div class="dropdown-filter__options" v-if="isOptionsShow">
      <span
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectFilter",
  data() {
    return {
      options: [
        { name: "By rating", value: 1 },
        { name: "Ascending prices", value: 2 },
        { name: "Descending prices", value: 3 },
      ],
      isOptionsShow: false,
      selected: "By rating",
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("selectOption", option.value);
      this.selected = option.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-filter {
  position: relative;
  width: 180px;
  border: 1px solid var(--disabledColor);
  padding: 0 30px 0 10px;
  border-radius: 4px;
  line-height: 36px;
  cursor: pointer;
  background-image: url("@/assets/images/icons/filter_arrow_white.svg");
  background-repeat: no-repeat;
  background-position: 90% center;
  white-space: nowrap;
  color: var(--backgroundColor);
  filter: invert(1);
  z-index: 333;
  &__options {
    position: absolute;
    top: 35px;
    left: 0px;
    width: 100%;
    background-color: #000;
    border: 1px solid var(--disabledColor);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding-left: inherit;
    span {
      display: block;
      width: 100%;
      transition: color 0.25s linear;
    }
    span:hover {
      color: var(--primaryColorNewHover);
    }
  }
}
</style>
