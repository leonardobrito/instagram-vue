import { shallowMount, createLocalVue } from '@vue/test-utils';
import App from '@/App.vue';
import VueRouter from 'vue-router';
import Header from '@/components/Header/index.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App.vue', () => {
  it('should renders App', () => {
    shallowMount(App, { localVue });
  });

  it('should render with a stub', () => expect(
    shallowMount(App, {
      localVue,
      stubs: ['router-view'],
    }).element,
  ).toBeDefined());

  it('should render with the router', () => {
    expect(
      shallowMount(App, {
        localVue,
      }).element,
    ).toBeDefined();
  });

  it('should render a child component header', () => {
    const wrapper = shallowMount(App, { localVue });
    expect(wrapper.find(Header).exists()).toBe(true);
  });
});
