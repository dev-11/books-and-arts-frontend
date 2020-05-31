import { NextMonth } from "@/utils/formatters/date_formatters/future/next_month_formatter.js";


describe("NextMonth tests", () => {

    it("test for next month true", () => {
        let next_month = new NextMonth(new Date('05-01-2020'), new Date('06-01-2020'));
        expect(next_month.in_range()).toBeTruthy();
    });
});
