import Vuex from 'vuex'
import Vue from 'vue'
import { mount } from '@vue/test-utils'

import SaladBowlComponent from '@/salad-bowl'
import saladStore from '@/store/salad-store'


Vue.use(Vuex)

it('store is loaded', () => {
  const store = new Vuex.Store(saladStore)
  const wrapper = mount(SaladBowlComponent,{
    store
  })

  store.state.salad.push('cucumber')
  expect(wrapper.vm.salad).toEqual(['cucumber'])
});

it('store works', () => {
  const store = new Vuex.Store(saladStore)
  const wrapper = mount(SaladBowlComponent,{
    store
  })

  wrapper.vm.addIngredient('cucumber')
  expect(wrapper.vm.salad).toEqual(['cucumber'])
});