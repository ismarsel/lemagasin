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
      switch (option) {
        case 1:
          state.products = state.products.sort((a, b) => {
            a.price - b.price;
          });
          break;
        case 2:
          state.products = state.products.sort((a, b) => {
            a.price < b.price ? 1 : -1;
          });
          break;
        default:
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
    SORT_PRODUCTS({ commit }, sortOption) {
      commit("SORT_PRODUCTS_STATE", sortOption);
    },
  },
  modules: {},
});
