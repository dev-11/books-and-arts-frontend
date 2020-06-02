import { ThreeWeeksAgo } from "@/utils/formatters/date_formatters/past/three_weeks_ago_formatter.js";


describe("ThreeWeeksAgo tests", () => {

    it("test for ThreeWeeksAgo false", () => {
        let three_weeks_ago = new ThreeWeeksAgo(new Date("05-29-2020"), new Date("05-03-2020"));
        expect(three_weeks_ago.in_range()).toBeFalsy();
    });

    it("test for ThreeWeeksAgo (Monday)", () => {
        let three_weeks_ago = new ThreeWeeksAgo(new Date("05-29-2020"), new Date("05-04-2020"));
        expect(three_weeks_ago.in_range()).toBeTruthy();
    });

    it("test for ThreeWeeksAgo (Sunday)", () => {
        let three_weeks_ago = new ThreeWeeksAgo(new Date("05-29-2020"), new Date("05-10-2020"));
        expect(three_weeks_ago.in_range()).toBeTruthy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new ThreeWeeksAgo(new Date(""), new Date(""));
        expect(instance.get_range_name()).toBe("three weeks ago");
    });
});
