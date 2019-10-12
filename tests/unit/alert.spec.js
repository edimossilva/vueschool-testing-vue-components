import AlertMessage from '@/alert-message'
import { mount } from '@vue/test-utils'


it('mounted assigns interval', () => {
  const wrapper = mount(AlertMessage)
  const vm = wrapper.vm
  expect(vm.interval).not.toBe(undefined)
});

it('counter works', () => {
  jest.useFakeTimers()
  const wrapper = mount(AlertMessage)
  const vm = wrapper.vm
  expect(vm.counter).toEqual(0)
  jest.advanceTimersByTime(1000)
  expect(vm.counter).toEqual(1)
  jest.advanceTimersByTime(1000)
  expect(vm.counter).toEqual(2)
});

it('instances get destroyed', () => {
  const beforeDestroyedSpy = jest.spyOn(AlertMessage,'beforeDestroy')
  const wrapper = mount(AlertMessage)
  const vm = wrapper.vm
  vm.counter = vm.timer - 1
  jest.advanceTimersByTime(1000)
  expect(beforeDestroyedSpy).toBeCalledTimes(1)
});