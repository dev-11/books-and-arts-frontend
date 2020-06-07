import { NextMonth } from "@/utils/formatters/date_formatters/future/next_month_formatter.js";


describe("NextMonth tests", () => {

    it("test for next month true", () => {
        let next_month = new NextMonth(new Date("05-01-2020"), new Date("06-01-2020"));
        expect(next_month.in_range()).toBeTruthy();
    });


    it("test for next month is true 2", () => {
        let next_month = new NextMonth(new Date("06-07-2020"), new Date("07-02-2020"));
        expect(next_month.in_range()).toBeTruthy();
    });


    it("get_range_name() returns correct value", () => {
        let instance = new NextMonth(new Date(), new Date());
        expect(instance.get_range_name()).toBe("next month");
    });
});
