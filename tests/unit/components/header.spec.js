import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Header from '@/components/Header/index.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('Header.vue', () => {
  it('should render with a stub', () => expect(
    shallowMount(Header, {
      localVue,
      stubs: { 'router-link': RouterLinkStub },
    }).element,
  ).toBeDefined());
});
