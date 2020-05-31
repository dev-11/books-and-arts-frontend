import { ThisWeekFuture } from "@/utils/formatters/date_formatters/future/this_week_future_formatter.js";


describe("ThisWeekFuture tests", () => {
    it("in_range returns true for this week 2+ days gap", () => {
        let this_week_future = new ThisWeekFuture(new Date('05-05-2020'), new Date('05-10-2020'));
        expect(this_week_future.in_range()).toBeTruthy();
    });

    it("in_range returns false for this week 2+ days gap", () => {
        let this_week_future = new ThisWeekFuture(new Date('05-05-2020'), new Date('05-11-2020'));
        expect(this_week_future.in_range()).toBeFalsy();
    });

    it("in_range returns false for this week 2+ days gap 2", () => {
        let this_week_future = new ThisWeekFuture(new Date('05-01-2020'), new Date('04-26-2020'));
        expect(this_week_future.in_range()).toBeFalsy();
    });
});
