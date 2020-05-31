import { Yesterday } from "@/utils/formatters/date_formatters/past/yesterday_formatter.js";


describe("yesterday tests", () => {
    it("in_range returns true for yesterday", () => {
        let yesterday = new Yesterday(new Date('05-02-2020'));
        expect(yesterday.in_range(new Date('05-01-2020'))).toBeTruthy();
    });
});
