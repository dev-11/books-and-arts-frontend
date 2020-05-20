import { shallowMount } from "@vue/test-utils";
import Book from "@/components/Book.vue";


describe("Book.vue", () => {
    const wrapper = shallowMount(Book, {
        propsData: {
            info: {
                book:
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
                    "published_at": "30/04/2020",
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
            "b-icon-book-half"
        ]
    });

    it("book has given data from prop", () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.vm.book.id).toBe("95dc3a9ac68444a4b90f3e85aec3db9d");
        expect(wrapper.vm.book.title).toBe("test_title");
        expect(wrapper.vm.book.authors).toBe("test_authors");
        expect(wrapper.vm.book.desc).toBe("test_desc");
        expect(wrapper.vm.book.img).toBe("test_img");
        expect(wrapper.vm.book.genres[0]).toBe("test_genre_1");
        expect(wrapper.vm.book.genres[1]).toBe("test_genre_2");
        expect(wrapper.vm.book.number_of_pages).toBe("352");
        expect(wrapper.vm.book.published_at).toBe("30/04/2020");
        expect(wrapper.vm.book.isbn).toBe("test_isbn");
        expect(wrapper.vm.book.rating.work_ratings_count).toBe(603);
        expect(wrapper.vm.book.rating.average_rating).toBe("3.91");
    });

    it("formatted_publication is no empty string", () => {
        expect(wrapper.vm.formatted_publication_date).not.toBe("");
    });

    it("switch_publication_date_format switches show_smart_publication_date", () => {
        expect(wrapper.vm.show_smart_publication_date).toBeTruthy();
        wrapper.vm.switch_publication_date_format();
        expect(wrapper.vm.show_smart_publication_date).toBeFalsy();
    });
});
