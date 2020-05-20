import { shallowMount } from '@vue/test-utils'
import Rating from '@/components/Rating.vue'

describe('Rating.vue', () => {
  const wrapper = shallowMount(Rating, {
    propsData: {
      rating: '1.0',
      ratings_count: 1
    },
    stubs: ['b-icon-star-fill', 'b-icon-star-half', 'b-icon-star']
  })

  it('Register is a component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('rating count is set', () => {
    expect(wrapper.vm.ratings_count).toBe(1)
  })

  it('full_stars is one', () => {
    expect(wrapper.vm.full_stars).toBe(1)
  })

  it('has_half_stars is false', () => {
    expect(wrapper.vm.has_half_star).toBe(0)
  })

  it('empty_stars is zero', () => {
    expect(wrapper.vm.empty_stars).toBe(4)
  })

//   // checks the counter increment on clicking the button
//   it('counter incremented or not', () => {
//     expect(wrapper.vm.count).toBe(0)
//     const button = wrapper.find('button')
//     button.trigger('click')
//     expect(wrapper.vm.count).toBe(1)
//   })
})