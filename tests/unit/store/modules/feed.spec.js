import Vuex from 'vuex';
import sinon from 'sinon';
import MockAdapter from 'axios-mock-adapter';
import api from '@/services/api';
import { createLocalVue } from '@vue/test-utils';
import feed from '@/store/modules/feed';

const localVue = createLocalVue();
localVue.use(Vuex);
const fetchedPosts = [
  {
    _id: 1,
    author: 'Leonardo',
    place: 'Juá City',
    likes: 0,
  },
];

const mock = new MockAdapter(api);

describe('Feed module', () => {
  it('should mutate on feed', () => {
    const { FETCH_FEED } = feed.mutations;
    FETCH_FEED(feed.state, { posts: fetchedPosts });
    const { posts } = feed.state;
    expect(posts.length).toBe(1);
  });

  it('should fetch feed through action fetchFeed', async () => {
    mock.onGet('/posts').reply(200, fetchedPosts);
    const { fetchFeed } = feed.actions;
    const { state } = feed;
    const commit = sinon.spy();
    await fetchFeed({ commit, state });
    const { posts } = feed.state;
    expect(posts.length).toBe(1);
    expect(posts).toEqual(fetchedPosts);
  });
});
