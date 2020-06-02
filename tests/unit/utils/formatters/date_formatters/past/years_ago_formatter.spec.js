import { YearsAgo } from "@/utils/formatters/date_formatters/past/years_ago_formatter.js";


describe("Years ago tests", () => {
    it("Years ago in range true", () => {
        let years_ago = new YearsAgo(new Date("05-01-2022"), new Date("01-01-2020"));
        expect(years_ago.in_range()).toBeTruthy();
    });
});
