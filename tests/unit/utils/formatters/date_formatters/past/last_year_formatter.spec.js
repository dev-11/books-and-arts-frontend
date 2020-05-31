import { LastYear } from "@/utils/formatters/date_formatters/past/last_year_formatter.js";


describe("Last year tests", () => {
    it("last year in range true", () => {
        let last_year = new LastYear(new Date('05-01-2021'));
        expect(last_year.in_range(new Date('01-01-2020'))).toBeTruthy();
    });
});
