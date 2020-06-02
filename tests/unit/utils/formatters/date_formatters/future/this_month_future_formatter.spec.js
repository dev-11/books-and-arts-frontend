import { ThisMonthFuture } from "@/utils/formatters/date_formatters/future/this_month_future_formatter";


describe("ThisMonthFuture tests", () => {
    it("test for this month future", () => {
        let this_month_future = new ThisMonthFuture(new Date("05-01-2020"), new Date("05-31-2020"));
        expect(this_month_future.in_range()).toBeTruthy();
    });

    it("test for this month future false", () => {
        let this_month_future = new ThisMonthFuture(new Date("05-01-2020"), new Date("05-21-2020"));
        expect(this_month_future.in_range()).toBeFalsy();
    });
});
