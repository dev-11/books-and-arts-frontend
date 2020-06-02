import { LastYear } from "@/utils/formatters/date_formatters/past/last_year_formatter.js";


describe("Last year tests", () => {
    it("last year in range true", () => {
        let last_year = new LastYear(new Date("05-01-2021"), new Date("01-01-2020"));
        expect(last_year.in_range()).toBeTruthy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new LastYear(new Date(), new Date());
        expect(instance.get_range_name()).toBe("last year");
    });
});
