import Vuex from 'vuex';
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

describe('Feed module', () => {
  it('should mutate on feed', () => {
    const { FETCH_FEED } = feed.mutations;
    FETCH_FEED(feed.state, { posts: fetchedPosts });
    const { posts } = feed.state;
    expect(posts.length).toBe(1);
  });
});
