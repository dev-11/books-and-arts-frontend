import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import axios from "axios";
import flushPromises from "flush-promises";
import MockAdapter from "axios-mock-adapter";


const response_data = {
    "statusCode": 200,
    "body": {
        "fetched_at": "\"2020-05-21 08:01:34.869465\"",
        "data": [
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
    }
};

describe("App.vue", () => {
    it("api returns data without error", async () => {
        const mockAxios = new MockAdapter(axios);

        mockAxios.onGet().reply(200, response_data);

        const wrapper = shallowMount(App);
        await flushPromises();

        expect(wrapper.vm.loading).toBeFalsy();
        expect(wrapper.vm.errored).toBeFalsy();

        expect(wrapper.vm.services[0].family).toBe("test_family");
        expect(wrapper.vm.services[0].service).toBe("test_service");
        expect(wrapper.vm.services[0].full_name).toBe("test_family.test_service");
        expect(wrapper.vm.services[0].service_type).toBe("books");
        expect(wrapper.vm.services[0].data[0].section).toBe("test_section");
        expect(wrapper.vm.services[0].data[0].books[0].id).toBe("95dc3a9ac68444a4b90f3e85aec3db9d");
        expect(wrapper.vm.services[0].data[0].books[0].title).toBe("test_title");
        expect(wrapper.vm.services[0].data[0].books[0].authors).toBe("test_authors");
        expect(wrapper.vm.services[0].data[0].books[0].price).toBe("test_price");
        expect(wrapper.vm.services[0].data[0].books[0].format).toBe("test_format");
        expect(wrapper.vm.services[0].data[0].books[0].desc).toBe("test_desc");
        expect(wrapper.vm.services[0].data[0].books[0].img).toBe("test_img");
        expect(wrapper.vm.services[0].data[0].books[0].genres[0]).toBe("test_genre_1");
        expect(wrapper.vm.services[0].data[0].books[0].genres[1]).toBe("test_genre_2");
        expect(wrapper.vm.services[0].data[0].books[0].number_of_pages).toBe("352");
        expect(wrapper.vm.services[0].data[0].books[0].published_at).toBe("30/04/2020");
        expect(wrapper.vm.services[0].data[0].books[0].isbn).toBe("test_isbn");
        expect(wrapper.vm.services[0].data[0].books[0].rating.average_rating).toBe("3.91");
        expect(wrapper.vm.services[0].data[0].books[0].rating.work_ratings_count).toBe(603);

        expect(wrapper.vm.services[1].family).toBe("test_art_family");
        expect(wrapper.vm.services[1].service).toBe("test_art_service");
        expect(wrapper.vm.services[1].full_name).toBe("test_art_family.test_art_service");
        expect(wrapper.vm.services[1].service_type).toBe("arts");
        expect(wrapper.vm.services[1].data.section).toBe("test_art_section");
        expect(wrapper.vm.services[1].data.exhibitions[0].id).toBe("422387899e19cb72b4eb39f210b5c909");
        expect(wrapper.vm.services[1].data.exhibitions[0].payment_type).toBe("test_payment_type");
        expect(wrapper.vm.services[1].data.exhibitions[0].title).toBe("test_title");
        expect(wrapper.vm.services[1].data.exhibitions[0].date).toBe("test_date");
        expect(wrapper.vm.services[1].data.exhibitions[0].description).toBe("test_desc");
        expect(wrapper.vm.services[1].data.exhibitions[0].img).toBe("test_art_img");
    });

    it("api return error", async () => {
        const mockAxios = new MockAdapter(axios);

        mockAxios.onGet().reply(500);

        const wrapper = shallowMount(App);
        await flushPromises();
        expect(wrapper.vm.loading).toBeFalsy();
        expect(wrapper.vm.errored).toBeTruthy();
    });
});
