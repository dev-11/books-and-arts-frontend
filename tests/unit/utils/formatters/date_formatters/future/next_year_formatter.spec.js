import { NextYear } from "@/utils/formatters/date_formatters/future/next_year_formatter.js";


describe("Next year tests", () => {
    it("next year in range true", () => {
        let next_year = new NextYear(new Date("05-01-2020"), new Date("01-01-2021"));
        expect(next_year.in_range()).toBeTruthy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new NextYear(new Date(), new Date());
        expect(instance.get_range_name()).toBe("next year");
    });
});