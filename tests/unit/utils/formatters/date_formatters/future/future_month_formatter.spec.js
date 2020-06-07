import { FutureMonth } from "@/utils/formatters/date_formatters/future/future_month_formatter.js";


describe("FutureMonth tests", () => {

    it("test for future month true", () => {
        let future_month = new FutureMonth(new Date("05-01-2020"), new Date("08-15-2020"));
        expect(future_month.in_range()).toBeTruthy();
    });

    // it("test for month value month is in", () => {
    //     let future_month = new FutureMonth(new Date("09-01-2020"), new Date("01-01-2021"));
    //     expect(future_month.in_range()).toBeTruthy();
    // });

    it("get_range_name() returns correct value", () => {
        let instance = new FutureMonth(new Date("05-01-2020"), new Date("08-15-2020"));
        expect(instance.get_range_name()).toBe("in August");
    });
});
