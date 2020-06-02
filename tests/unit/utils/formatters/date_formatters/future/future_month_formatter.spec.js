import { FutureMonth } from "@/utils/formatters/date_formatters/future/future_month_formatter.js";


describe("FutureMonth tests", () => {

    it("test for future month true", () => {
        let future_month = new FutureMonth(new Date("05-01-2020"), new Date("08-15-2020"));
        expect(future_month.in_range()).toBeTruthy();
    });
});
