import { shallowMount } from "@vue/test-utils";
import Exhibition from "@/components/Exhibition.vue";
import LocalStorageMock from "../../mocks/LocalStorage.mock"


const options = {
  propsData: {
    info: {
      data:
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
  stubs: ["b-modal", "b-card-text", "b-icon-calendar", "b-icon-eye", "b-card-body", "b-icon-x"]
};

describe("Exhibition.vue", () => {
    const wrapper = shallowMount(Exhibition, options);
  
    it("tests for rating 1.0", () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
      expect(wrapper.vm.details.id).toBe("422387899e19cb72b4eb39f210b5c909");
      expect(wrapper.vm.details.payment_type).toBe("test_payment_type");
      expect(wrapper.vm.details.title).toBe("test_title");
      expect(wrapper.vm.details.date).toBe("test_date");
      expect(wrapper.vm.details.description).toBe("test_description");
      expect(wrapper.vm.details.img).toBe("test_img");
    });
  });

  describe("Exhibition.vue", () => {
    global.localStorage = LocalStorageMock;

    it("toogle_liked flips is_liked to true and stores in localStorage", () => {
        const wrapper = shallowMount(Exhibition, options);

        expect(wrapper.vm.is_liked).toBeFalsy();
        expect(localStorage.getItem(options.propsData.info.data.id)).toBeFalsy();
        
        wrapper.vm.toogle_liked();

        expect(wrapper.vm.is_liked).toBeTruthy();
        expect(localStorage.getItem(options.propsData.info.data.id)).toBe('checked');
    });

    it("toogle_liked flips is_liked to false and removes it from localStorage", () => {
        const wrapper = shallowMount(Exhibition, options);
        wrapper.vm.is_liked = true;
        localStorage.getItem(options.propsData.info.data.id, "checked");

        expect(wrapper.vm.is_liked).toBeTruthy();
        expect(localStorage.getItem(options.propsData.info.data.id)).toBe('checked');
        
        wrapper.vm.toogle_liked();

        expect(wrapper.vm.is_liked).toBeFalsy();
        expect(localStorage.getItem(options.propsData.info.data.id)).toBeFalsy;
    });
});