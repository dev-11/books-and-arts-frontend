import { DayBeforeYesterday } from "@/utils/formatters/date_formatters/past/the_day_before_yesterday_formatter";


describe("DayBeforeYesterday tests", () => {
    it("in_range returns true for two days ago", () => {
        let two_days_ago = new DayBeforeYesterday(new Date("05-03-2020"), new Date("05-01-2020"));
        expect(two_days_ago.in_range()).toBeTruthy();
    });
});
