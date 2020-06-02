import { ThreeWeeksFromNow } from "@/utils/formatters/date_formatters/future/three_weeks_from_now_formatter";


describe("TwoWeeksFromNow tests", () => {
    it("test for three_weeks_from_now false", () => {
        let three_weeks_from_now = new ThreeWeeksFromNow(new Date("05-01-2020"), new Date("05-25-2020"));
        expect(three_weeks_from_now.in_range()).toBeFalsy();
    });

    it("test for three_weeks_from_now (Monday)", () => {
        let three_weeks_from_now = new ThreeWeeksFromNow(new Date("05-04-2020"), new Date("05-25-2020"));
        expect(three_weeks_from_now.in_range()).toBeTruthy();
    });

    it("test for three_weeks_from_now (Sunday)", () => {
        let three_weeks_from_now = new ThreeWeeksFromNow(new Date("05-05-2020"), new Date("05-31-2020"));
        expect(three_weeks_from_now.in_range()).toBeTruthy();
    });

    it("test for three_weeks_from_now false 2", () => {
        let three_weeks_from_now = new ThreeWeeksFromNow(new Date("05-05-2020"), new Date("06-01-2020"));
        expect(three_weeks_from_now.in_range()).toBeFalsy();
    });
});
