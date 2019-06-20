import api from '../../services/api';

const feed = {
  state: {
    posts: [],
  },
  getters: {},
  mutations: {
    FETCH_FEED: (state, payload) => {
      state.posts = payload.feed;
    },
  },
  actions: {
    async fetchFeed({ commit }) {
      try {
        const { data } = await api.get('/posts');
        commit('FETCH_FEED', {
          feed: data,
        });
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export default feed;
