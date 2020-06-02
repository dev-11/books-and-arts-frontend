import { DayBeforeYesterday } from "@/utils/formatters/date_formatters/past/the_day_before_yesterday_formatter";


describe("DayBeforeYesterday tests", () => {
    it("in_range returns true for two days ago", () => {
        let two_days_ago = new DayBeforeYesterday(new Date("05-03-2020"), new Date("05-01-2020"));
        expect(two_days_ago.in_range()).toBeTruthy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new DayBeforeYesterday(new Date(), new Date());
        expect(instance.get_range_name()).toBe("the day before yesterday");
    });
});
