import GithubCard from '@/github-card'
import { mount } from '@vue/test-utils'


describe('GithubCard', () => {
  it('composeUrl', () => {
    const wrapper = mount(GithubCard)
    const vm = wrapper.vm;
    expect(vm.composeUrl('mock')).toBe('https://api.github.com/users/mock');
    expect(vm.composeUrl(123)).toBe('https://api.github.com/users/123');
  });

  it('fetchData', async () => {
    const jsonMock = jest.fn().mockResolvedValue('data')
    const wrapper = mount(GithubCard);
    const vm = wrapper.vm;

    window.fetch = jest.fn().mockResolvedValue({
      json: jsonMock
    })

    wrapper.setMethods({
      composeUrl: () => 'mock_url'
    })

    await vm.fetchData()
    expect(window.fetch).toHaveBeenCalledWith('mock_url')
    expect(jsonMock).toHaveBeenCalled()
    expect(vm.data).toEqual('data')

  });
});