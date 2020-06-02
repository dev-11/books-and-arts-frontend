import { Yesterday } from "@/utils/formatters/date_formatters/past/yesterday_formatter.js";


describe("yesterday tests", () => {
    it("in_range returns true for yesterday", () => {
        let yesterday = new Yesterday(new Date("05-02-2020"), new Date("05-01-2020"));
        expect(yesterday.in_range()).toBeTruthy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new Yesterday(new Date(), new Date());
        expect(instance.get_range_name()).toBe("yesterday");
    });
});
