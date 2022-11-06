import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    GET_PRODUCTS: (state) => {
      return state.products;
    },
    GET_CART_PRODUCTS: (state) => {
      return state.cart;
    },
    GET_PRODUCTS_LENGTH: (state) => {
      return state.products.length;
    },
    GET_CURRENT_CATEGORY: (state) => {
      return state.products[0].category;
    },
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SORT_PRODUCTS_STATE: (state, option) => {
      console.log(state.products, option);
    },
  },
  actions: {
    FETCH_PRODUCTS({ commit }, categoty) {
      axios
        .get(`https://fakestoreapi.com/products/category/${categoty}`)
        .then((response) => {
          commit("SET_PRODUCTS", response.data);
        })
        .catch((error) => {
          this.error = true;
          console.log(error);
        });
    },
  },
  modules: {},
});
