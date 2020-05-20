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

  // checks Rating is a component.
  it('Register is a component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

//   // checks value of the counter is zero initially
//   it('count is initially zero', () => {
//     expect(wrapper.vm.count).toBe(0)
//   })

//   // check the button present or not
//   it('is the button present', () => {
//     expect(wrapper.contains('button')).toBe(true)
//   })

//   // checks the counter increment on clicking the button
//   it('counter incremented or not', () => {
//     expect(wrapper.vm.count).toBe(0)
//     const button = wrapper.find('button')
//     button.trigger('click')
//     expect(wrapper.vm.count).toBe(1)
//   })
})