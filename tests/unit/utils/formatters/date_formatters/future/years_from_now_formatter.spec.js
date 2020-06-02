import { YearsFromNow } from "@/utils/formatters/date_formatters/future/years_from_now_formatter.js";


describe("Years from now tests", () => {
    it("Years from now in range true", () => {
        let years_from_now = new YearsFromNow(new Date("05-01-2020"), new Date("01-01-2022"));
        expect(years_from_now.in_range()).toBeTruthy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new YearsFromNow(new Date("05-01-2020"), new Date("01-01-2022"));
        expect(instance.get_range_name()).toBe("in 2 years");
    });
});
