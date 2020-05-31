import { YearsFromNow } from "@/utils/formatters/date_formatters/future/years_from_now_formatter.js";


describe("Years from now tests", () => {
    it("Years from now in range true", () => {
        let years_from_now = new YearsFromNow(new Date('05-01-2020'));
        expect(years_from_now.in_range(new Date('01-01-2022'))).toBeTruthy();
    });
});
