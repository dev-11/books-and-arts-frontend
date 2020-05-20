import { shallowMount } from "@vue/test-utils";
import Rating from "@/components/Rating.vue";

// tests for rating 1.0
describe("Rating.vue", () => {
  const wrapper = shallowMount(Rating, {
    propsData: {
      rating: "1.0",
      ratings_count: 1
    },
    stubs: ["b-icon-star-fill", "b-icon-star-half", "b-icon-star"]
  });

  it("tests for rating 1.0", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.vm.ratings_count).toBe(1);
    expect(wrapper.vm.full_stars).toBe(1);
    expect(wrapper.vm.has_half_star).toBe(0);
    expect(wrapper.vm.empty_stars).toBe(4);
  })
})

// tests for rating 2.44
describe("Rating.vue", () => {
  const wrapper = shallowMount(Rating, {
    propsData: {
      rating: "2.44",
      ratings_count: 1
    },
    stubs: ["b-icon-star-fill", "b-icon-star-half", "b-icon-star"]
  })

  it("tests for rating 2.44", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.vm.ratings_count).toBe(1);
    expect(wrapper.vm.full_stars).toBe(2);
    expect(wrapper.vm.has_half_star).toBeGreaterThan(0);
    expect(wrapper.vm.empty_stars).toBe(2);
  })
})

// tests for rating 3
describe("Rating.vue", () => {
  const wrapper = shallowMount(Rating, {
    propsData: {
      rating: "3",
      ratings_count: 1
    },
    stubs: ["b-icon-star-fill", "b-icon-star-half", "b-icon-star"]
  })

  it("tests for rating 3", () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.ratings_count).toBe(1)
    expect(wrapper.vm.full_stars).toBe(3)
    expect(wrapper.vm.has_half_star).toBe(0)
    expect(wrapper.vm.empty_stars).toBe(2)
  })
})

// tests for rating 0
describe("Rating.vue", () => {
  const wrapper = shallowMount(Rating, {
    propsData: {
      rating: "0",
      ratings_count: 1
    },
    stubs: ["b-icon-star-fill", "b-icon-star-half", "b-icon-star"]
  })

  it("tests for rating 0", () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.ratings_count).toBe(1)
    expect(wrapper.vm.full_stars).toBe(0)
    expect(wrapper.vm.has_half_star).toBe(0)
    expect(wrapper.vm.empty_stars).toBe(5)
  })
})

// tests for rating 5.0
describe("Rating.vue", () => {
  const wrapper = shallowMount(Rating, {
    propsData: {
      rating: "5.0",
      ratings_count: 1
    },
    stubs: ["b-icon-star-fill", "b-icon-star-half", "b-icon-star"]
  })

  it("tests for rating 5.0", () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.ratings_count).toBe(1)
    expect(wrapper.vm.full_stars).toBe(5)
    expect(wrapper.vm.has_half_star).toBe(0)
    expect(wrapper.vm.empty_stars).toBe(0)
  })
})