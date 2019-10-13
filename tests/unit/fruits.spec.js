import  FruitBasket from '@/fruit-basket'
import { mount } from '@vue/test-utils'
import { domainToASCII } from 'url';

it('fills fruit', () => {
  const wrapper = mount(FruitBasket)
  const inputDOM = wrapper.find('input')
  inputDOM.element.value = "banana"
  inputDOM.trigger('input')
  expect(wrapper.vm.fruit).toEqual("banana")
});


it('add fruit on button click', () => {

  const wrapper = mount(FruitBasket)

  const inputDOM = wrapper.find('input')
  inputDOM.element.value = "banana"
  inputDOM.trigger('input')

  const buttonDOM = wrapper.find('button')
  buttonDOM.trigger('click')

  expect(wrapper.vm.fruit).toEqual("")
  expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['banana']))
  expect(wrapper.findAll('li').length).toBe(1)
});