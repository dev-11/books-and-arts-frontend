import { Tomorrow } from "@/utils/formatters/date_formatters/future/tomorrow_formatter.js";


describe("Tomorrow tests", () => {
    it("in_range returns true for Tomorrow", () => {
        let tomorrow = new Tomorrow(new Date("05-01-2020"), new Date("05-02-2020"));
        expect(tomorrow.in_range()).toBeTruthy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new Tomorrow(new Date(), new Date());
        expect(instance.get_range_name()).toBe("tomorrow");
    });
});
