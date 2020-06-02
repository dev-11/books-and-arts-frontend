import { DayAfterTomorrow } from "@/utils/formatters/date_formatters/future/the_day_after_tomorrow_formatter.js";


describe("DayAfterTomorrow tests", () => {
    it("in_range returns true for Tomorrow", () => {
        let day_after_tomorrow = new DayAfterTomorrow(new Date("05-01-2020"), new Date("05-03-2020"));
        expect(day_after_tomorrow.in_range()).toBeTruthy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new DayAfterTomorrow(new Date(), new Date());
        expect(instance.get_range_name()).toBe("the day after tomorrow");
    });
});
