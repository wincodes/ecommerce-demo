import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: []
    },
    mutations: {
        addProduct(state, payload) {
            return (state.count = state.count.concat(payload));
        },
        checkout(state) {
            return (state.count = []);
        }
    },
    actions: {
        addProduct({ commit }, payload) {
            commit("addProduct", payload);
        },
        checkout({ commit }) {
            commit("checkout");
        }
    }
});
export default store;
