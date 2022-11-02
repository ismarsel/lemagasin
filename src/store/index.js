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
    SORT_PRODUCTS: (state, option) => {},
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
