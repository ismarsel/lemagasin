import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
  },
  getters: {
    GET_PRODUCTS: (state) => {
      return state.products;
    },
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SORT_PRODUCTS: (state, option) => {
      switch (option) {
        case 0:
          console.log(state.products);
          state.products.sort((a, b) => {
            a.rating.rate > b.rating.rate ? 1 : -1;
          });
          break;
        case 1:
          state.products = state.products.sort((a, b) => {
            a.price > b.price ? 1 : -1;
          });
          break;
        case 2:
          state.products = state.products.sort((a, b) => {
            a.price < b.price ? 1 : -1;
          });
          break;
      }
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
