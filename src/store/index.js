import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    origin: null,
    currentLocation: null,
    destination: null
  },
  mutations: {
    SET_ORIGIN: (state, origin) => {
      state.origin = origin;
    },
    SET_DESTINATION: (state, destination) => {
      state.destination = destination;
    },
    SET_CURRENT_LOCATION: (state, currentLocation) => {
      state.currentLocation = currentLocation;
    }
  },
  actions: {
    setOrigin({ commit }, payload) {
      commit("SET_ORIGIN", payload);
    },
    setDestination({ commit }, payload) {
      commit("SET_DESTINATION", payload);
    },
    setCurrent({ commit }, payload) {
      commit("SET_CURRENT_LOCATION", payload);
    }
  },
  modules: {}
});
