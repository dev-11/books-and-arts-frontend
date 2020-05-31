import { TwoWeeksFromNow } from "@/utils/formatters/date_formatters/future/two_weeks_from_now_formatter";


describe("TwoWeeksFromNow tests", () => {
    it("test for two_weeks_from_now false", () => {
        let two_weeks_from_now = new TwoWeeksFromNow(new Date('05-05-2020'));
        expect(two_weeks_from_now.in_range(new Date('05-17-2020'))).toBeFalsy();
    });

    it("test for two_weeks_from_now (Monday)", () => {
        let two_weeks_from_now = new TwoWeeksFromNow(new Date('05-04-2020'));
        expect(two_weeks_from_now.in_range(new Date('05-18-2020'))).toBeTruthy();
    });

    it("test for two_weeks_from_now (Sunday)", () => {
        let two_weeks_from_now = new TwoWeeksFromNow(new Date('05-05-2020'));
        expect(two_weeks_from_now.in_range(new Date('05-24-2020'))).toBeTruthy
    });

    it("test for two_weeks_from_now false 2", () => {
        let two_weeks_from_now = new TwoWeeksFromNow(new Date('05-05-2020'));
        expect(two_weeks_from_now.in_range(new Date('05-25-2020'))).toBeFalsy();
    });
});
