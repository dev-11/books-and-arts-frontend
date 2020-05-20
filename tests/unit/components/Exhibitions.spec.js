import { shallowMount } from "@vue/test-utils";
import Exhibition from "@/components/Exhibition.vue";


describe("Exhibition.vue", () => {
    const wrapper = shallowMount(Exhibition, {
      propsData: {
        info: {
            exhibition:
            {
                "id": "422387899e19cb72b4eb39f210b5c909",
                "payment_type": "test_payment_type",
                "title": "test_title",
                "date": "test_date",
                "description": "test_description",
                "img": "test_img"
            }
        }
      },
      stubs: ["b-modal", "b-card-text", "b-icon-calendar", "b-icon-eye", "b-card-body"]
    });
  
    it("tests for rating 1.0", () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
      expect(wrapper.vm.exhibition.id).toBe("422387899e19cb72b4eb39f210b5c909");
      expect(wrapper.vm.exhibition.payment_type).toBe("test_payment_type");
      expect(wrapper.vm.exhibition.title).toBe("test_title");
      expect(wrapper.vm.exhibition.date).toBe("test_date");
      expect(wrapper.vm.exhibition.description).toBe("test_description");
      expect(wrapper.vm.exhibition.img).toBe("test_img");
    });
  });
