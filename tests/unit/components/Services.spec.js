import { shallowMount } from "@vue/test-utils";
import Services from "@/components/Services.vue";
import LocalStorageMock from "../../mocks/LocalStorage.mock"


describe("Services.vue", () => {
    const wrapper = shallowMount(Services, {
        propsData: {
            service: [
                {
                    "family": "test_family",
                    "service": "test_service",
                    "full_name": "test_family.test_service",
                    "service_type": "books",
                    "data": [
                        {
                            "section": "test_section",
                            "books": [
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
                            ]
                        }
                    ]
                },
                {
                    "family": "test_art_family",
                    "service": "test_art_service",
                    "full_name": "test_art_family.test_art_service",
                    "service_type": "arts",
                    "data": {
                        "section": "test_art_section",
                        "exhibitions": [
                            {
                                "id": "422387899e19cb72b4eb39f210b5c909",
                                "payment_type": "test_payment_type",
                                "title": "test_title",
                                "date": "test_date",
                                "description": "test_desc",
                                "img": "test_art_img"
                            }
                        ]
                    }
                }
            ]
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
            "b-form-input",
            "b-navbar",
            "b-navbar-brand",
            "b-collapse",
            "b-navbar-nav",
            "b-nav-item",
            "b-icon-heart",
            "b-icon-search"
        ]
    });

    it("books is a flat array of the incoming books", () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.vm.books[0].id).toBe("95dc3a9ac68444a4b90f3e85aec3db9dtest_family.test_servicetest_section");
        expect(wrapper.vm.books[0].section).toBe("test_section");
        expect(wrapper.vm.books[0].type).toBe("books");
        expect(wrapper.vm.books[0].data.title).toBe("test_title");
        expect(wrapper.vm.books[0].data.authors).toBe("test_authors");
        expect(wrapper.vm.books[0].data.desc).toBe("test_desc");
        expect(wrapper.vm.books[0].data.img).toBe("test_img");
        expect(wrapper.vm.books[0].data.genres[0]).toBe("test_genre_1");
        expect(wrapper.vm.books[0].data.genres[1]).toBe("test_genre_2");
        expect(wrapper.vm.books[0].data.number_of_pages).toBe("352");
        expect(wrapper.vm.books[0].data.published_at).toBe("30/04/2020");
        expect(wrapper.vm.books[0].data.isbn).toBe("test_isbn");
        expect(wrapper.vm.books[0].data.rating.work_ratings_count).toBe(603);
        expect(wrapper.vm.books[0].data.rating.average_rating).toBe("3.91");
    });

    it("books_and_arts is a flat array of the incoming books and arts", () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.vm.books_and_arts[0].id).toBe("95dc3a9ac68444a4b90f3e85aec3db9dtest_family.test_servicetest_section");
        expect(wrapper.vm.books_and_arts[0].section).toBe("test_section");
        expect(wrapper.vm.books_and_arts[0].type).toBe("books");
        expect(wrapper.vm.books_and_arts[0].data.title).toBe("test_title");
        expect(wrapper.vm.books_and_arts[0].data.authors).toBe("test_authors");
        expect(wrapper.vm.books_and_arts[0].data.desc).toBe("test_desc");
        expect(wrapper.vm.books_and_arts[0].data.img).toBe("test_img");
        expect(wrapper.vm.books_and_arts[0].data.genres[0]).toBe("test_genre_1");
        expect(wrapper.vm.books_and_arts[0].data.genres[1]).toBe("test_genre_2");
        expect(wrapper.vm.books_and_arts[0].data.number_of_pages).toBe("352");
        expect(wrapper.vm.books_and_arts[0].data.published_at).toBe("30/04/2020");
        expect(wrapper.vm.books_and_arts[0].data.isbn).toBe("test_isbn");
        expect(wrapper.vm.books_and_arts[0].data.rating.work_ratings_count).toBe(603);
        expect(wrapper.vm.books_and_arts[0].data.rating.average_rating).toBe("3.91");

        expect(wrapper.vm.books_and_arts[1].id).toBe("422387899e19cb72b4eb39f210b5c909test_art_family.test_art_service");
        expect(wrapper.vm.books_and_arts[1].section).toBe("test_art_section");
        expect(wrapper.vm.books_and_arts[1].type).toBe("arts");
        expect(wrapper.vm.books_and_arts[1].data.title).toBe("test_title");
        expect(wrapper.vm.books_and_arts[1].data.payment_type).toBe("test_payment_type");
        expect(wrapper.vm.books_and_arts[1].data.date).toBe("test_date");
        expect(wrapper.vm.books_and_arts[1].data.description).toBe("test_desc");
        expect(wrapper.vm.books_and_arts[1].data.img).toBe("test_art_img");
    });

    it("show_favs_only flag is removed from local storage", () => {
        global.localStorage = LocalStorageMock;

        expect(localStorage.getItem('show_favs_only')).toBeFalsy();

        wrapper.vm.udpate_local_storage("show_favs_only");

        expect(localStorage.getItem('show_favs_only')).toBeTruthy();

    });

    it("show_favs_only flag is removed from local storage", () => {
        global.localStorage = LocalStorageMock;
        localStorage.setItem("show_favs_only", "checked");

        expect(localStorage.getItem("show_favs_only")).toBeTruthy();

        wrapper.vm.udpate_local_storage("show_favs_only");

        expect(localStorage.getItem("show_favs_only")).toBeFalsy();

    });

});
