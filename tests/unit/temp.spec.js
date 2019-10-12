import Temprature from '@/temprature'
import { mount } from '@vue/test-utils'

describe('temprature', () => {
  let wrapper
  let vm

  beforeEach(() => {
    wrapper = mount(Temprature);
    vm = wrapper.vm;
  });

  test('should starts with type celsius', () => {
    expect(vm.type).toBe('celsius');
  });

  describe('computed', () => {
    let wrapper
    let vm

    beforeEach(() => {
      wrapper = mount(Temprature);
      vm = wrapper.vm;
      vm.degrees = 0;
    });

    it('celsius', () => {
      expect(vm.celsius).toEqual(0);
    });

    it('fahrenheit', () => {
      expect(vm.fahrenheit).toEqual(32);
    });

  });

  describe('watch', () => {
    describe('When temp is celsius', () => {
      let wrapper
      let vm

      beforeEach(() => {
        wrapper = mount(Temprature);
        vm = wrapper.vm;

        let props = {
          temp: 10
        }
        wrapper.setProps(props);
      });

      it('should has type celsius', () => {
        expect(vm.type).toEqual('celsius')
      });

      it('should has celsius = 10', () => {
        expect(vm.celsius).toEqual(10)
      });
    });

    describe('When temp is fahrenheit', () => {
      let wrapper
      let vm

      beforeEach(() => {
        wrapper = mount(Temprature);
        vm = wrapper.vm;

        let props = {
          temp: '10f'
        }
        wrapper.setProps(props);
      });

      it('should has type fahrenheit', () => {
        expect(vm.type).toEqual('fahrenheit')
      });

      it('should has fahrenheit = 10', () => {
        expect(vm.fahrenheit).toEqual(10)
      });
    });

  });
});