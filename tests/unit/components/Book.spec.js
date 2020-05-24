import { shallowMount } from "@vue/test-utils";
import Book from "@/components/Book.vue";
import LocalStorageMock from "../../mocks/LocalStorage.mock"


const options =  {
    propsData: {
        info: {
            data:
            {
                "id": "95dc3a9ac68444a4b90f3e85aec3db9d",
                "title": "test_title",
                "authors": "test_authors",
                "price": "test_price",
                "format": "test_format",
                "desc": "test_desc",
                "img": "test_img",
                "genres": [
                    "test_genre_1",
                    "test_genre_2"
                ],
                "number_of_pages": "352",
                "published_at": "01/05/2020",
                "isbn": "test_isbn",
                "rating": {
                    "work_ratings_count": 603,
                    "average_rating": "3.91"
                }
            }
        }
    },
    stubs: [
        "b-modal",
        "b-card-text",
        "b-icon-calendar",
        "b-icon-eye",
        "b-card-body",
        "b-icon-bag",
        "b-tooltip",
        "b-icon-pencil-square",
        "b-icon-book",
        "b-icon-book-half",
        "b-icon-x"
    ]
};

describe("Book.vue", () => {
    const wrapper = shallowMount(Book, options);

    it("book has given data from prop", () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.vm.details.id).toBe("95dc3a9ac68444a4b90f3e85aec3db9d");
        expect(wrapper.vm.details.title).toBe("test_title");
        expect(wrapper.vm.details.authors).toBe("test_authors");
        expect(wrapper.vm.details.desc).toBe("test_desc");
        expect(wrapper.vm.details.img).toBe("test_img");
        expect(wrapper.vm.details.genres[0]).toBe("test_genre_1");
        expect(wrapper.vm.details.genres[1]).toBe("test_genre_2");
        expect(wrapper.vm.details.number_of_pages).toBe("352");
        expect(wrapper.vm.details.published_at).toBe("01/05/2020");
        expect(wrapper.vm.details.isbn).toBe("test_isbn");
        expect(wrapper.vm.details.rating.work_ratings_count).toBe(603);
        expect(wrapper.vm.details.rating.average_rating).toBe("3.91");
    });

    it("switch_publication_date_format switches show_smart_publication_date", () => {
        expect(wrapper.vm.show_smart_publication_date).toBeTruthy();
        wrapper.vm.switch_publication_date_format();
        expect(wrapper.vm.show_smart_publication_date).toBeFalsy();
    });

    it("get_random_genre gets random genre for two genres", () => {
        expect(wrapper.vm.random_genre).toBeNull();
        expect(wrapper.vm.prev_index).toBe(0);
        wrapper.vm.get_random_genre();
        expect(wrapper.vm.random_genre).not.toBeNull();
        expect(wrapper.vm.prev_index).toBe(1);
    }); 
});


describe("Book.vue", () => {

    Date.now = jest.fn(() => new Date('05-01-2020'));
    const wrapper = shallowMount(Book, options);

    it("formatted_publication_date is today", () => {
        expect(wrapper.vm.formatted_publication_date).toBe("today");
    });
});

describe("Book.vue", () => {
    
    Date.now = jest.fn(() => new Date('05-02-2020'));
    const wrapper = shallowMount(Book, options);

    it("formatted_publication_date is yesterday", () => {

        expect(wrapper.vm.formatted_publication_date).toBe("yesterday");
    });
});

describe("Book.vue", () => {

    Date.now = jest.fn(() => new Date('04-30-2020'));
    const wrapper = shallowMount(Book, options);

    it("formatted_publication_date is tomorrow", () => {
        expect(wrapper.vm.formatted_publication_date).toBe("tomorrow");
    });
});

describe("Book.vue", () => {

    Date.now = jest.fn(() => new Date('05-03-2020'));
    const wrapper = shallowMount(Book, options);

    it("formatted_publication_date is the day before yesterday", () => {
        expect(wrapper.vm.formatted_publication_date).toBe("the day before yesterday");
    });
});

describe("Book.vue", () => {

    Date.now = jest.fn(() => new Date('04-29-2020'));
    const wrapper = shallowMount(Book, options);

    it("formatted_publication_date is the day after tomorrow", () => {
        expect(wrapper.vm.formatted_publication_date).toBe("the day after tomorrow");
    });
});

describe("Book.vue", () => {

    Date.now = jest.fn(() => new Date('05-11-2020'));
    const wrapper = shallowMount(Book, options);

    it("formatted_publication_date is 10 day ago", () => {
        expect(wrapper.vm.formatted_publication_date).toBe("10 days ago");
    });
});

describe("Book.vue", () => {

    Date.now = jest.fn(() => new Date('04-20-2020'));
    const wrapper = shallowMount(Book, options);

    it("formatted_publication_date is 11 days from now", () => {
        expect(wrapper.vm.formatted_publication_date).toBe("11 days from now");
    });
});

describe("Book.vue", () => {
    global.localStorage = LocalStorageMock;

    it("toogle_liked flips is_liked to true and stores in localStorage", () => {
        const wrapper = shallowMount(Book, options);

        expect(wrapper.vm.is_liked).toBeFalsy();
        expect(localStorage.getItem(options.propsData.info.data.id)).toBeFalsy();
        
        wrapper.vm.toogle_liked();

        expect(wrapper.vm.is_liked).toBeTruthy();
        expect(localStorage.getItem(options.propsData.info.data.id)).toBe('checked');
    });

    it("toogle_liked flips is_liked to false and removes it from localStorage", () => {
        const wrapper = shallowMount(Book, options);
        wrapper.vm.is_liked = true;
        localStorage.getItem(options.propsData.info.data.id, "checked");

        expect(wrapper.vm.is_liked).toBeTruthy();
        expect(localStorage.getItem(options.propsData.info.data.id)).toBe('checked');
        
        wrapper.vm.toogle_liked();

        expect(wrapper.vm.is_liked).toBeFalsy();
        expect(localStorage.getItem(options.propsData.info.data.id)).toBeFalsy;
    });
});

