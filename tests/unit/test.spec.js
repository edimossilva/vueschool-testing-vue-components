import TestComponent from '@/test'
import List from '@/list'

import { mount, shallowMount } from '@vue/test-utils'

test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'VueSchool2'
    }
  })
  expect(wrapper).toMatchSnapshot()
})

test('ListComponent', () => {
  const wrapper = mount(List);
  const movies = wrapper.vm.marvelMovies;
  wrapper.setData({marvelMovies: [...movies,'endgame']});
  expect(wrapper).toMatchSnapshot();
})