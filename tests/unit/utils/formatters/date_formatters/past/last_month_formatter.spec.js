import { LastMonth } from "@/utils/formatters/date_formatters/past/last_month_formatter.js";


describe("LastMonth tests", () => {

    it("test for came out last month true", () => {
        let last_month = new LastMonth(new Date("05-01-2020"), new Date("04-01-2020"));
        expect(last_month.in_range()).toBeTruthy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new LastMonth(new Date(), new Date());
        expect(instance.get_range_name()).toBe("last month");
    });
});
