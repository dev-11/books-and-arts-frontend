import { TwoWeeksAgo } from "@/utils/formatters/date_formatters/past/two_weeks_ago_formatter.js";


describe("TwoWeeksAgo tests", () => {

    it("test for last week false", () => {
        let two_weeks_ago = new TwoWeeksAgo(new Date("05-20-2020"), new Date("05-03-2020"));
        expect(two_weeks_ago.in_range()).toBeFalsy();
    });

    it("test for last week (Monday)", () => {
        let two_weeks_ago = new TwoWeeksAgo(new Date("05-20-2020"), new Date("05-04-2020"));
        expect(two_weeks_ago.in_range()).toBeTruthy();
    });

    it("test for last week (Sunday)", () => {
        let two_weeks_ago = new TwoWeeksAgo(new Date("05-20-2020"), new Date("05-10-2020"));
        expect(two_weeks_ago.in_range()).toBeTruthy();
    });

    it("get_range_name() returns correct value", () => {
        let instance = new TwoWeeksAgo(new Date(), new Date());
        expect(instance.get_range_name()).toBe("two weeks ago");
    });
});
