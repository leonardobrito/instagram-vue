import Vue from 'vue';
import Vuex from 'vuex';
import api from './services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    feed: [],
  },
  getters: {},
  mutations: {
    FETCH_FEED: (state, data) => {
      state.feed = data;
    },
  },
  actions: {
    async fetchFeed({ commit }) {
      try {
        const response = await api.get('/posts');
        commit('FETCH_FEED', response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
