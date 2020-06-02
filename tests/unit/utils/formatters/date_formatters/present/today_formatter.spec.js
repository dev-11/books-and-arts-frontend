import { Today } from "@/utils/formatters/date_formatters/present/today_formatter.js";


describe("Today tests", () => {
    it("in_range returns true for today", () => {
        let today = new Today(new Date("05-01-2020"), new Date("05-01-2020"));
        expect(today.in_range()).toBeTruthy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new Today(new Date(), new Date());
        expect(instance.get_range_name()).toBe("today");
    });
});
