import { LastWeek } from "@/utils/formatters/date_formatters/past/last_week_formatter.js";


describe("LastWeek tests", () => {

    it("test for last week false", () => {
        let last_week = new LastWeek(new Date("05-20-2020"), new Date("05-10-2020"));
        expect(last_week.in_range()).toBeFalsy();
    });

    it("test for last week (Monday)", () => {
        let last_week = new LastWeek(new Date("05-20-2020"), new Date("05-11-2020"));
        expect(last_week.in_range()).toBeTruthy();
    });

    it("test for last week (Sunday)", () => {
        let last_week = new LastWeek(new Date("05-20-2020"), new Date("05-17-2020"));
        expect(last_week.in_range()).toBeTruthy();
    });

    it("test for last week, first day of month", () => {
        let last_week = new LastWeek(new Date("06-04-2020"), new Date("05-27-2020"));
        expect(last_week.in_range()).toBeTruthy();
    });
});
