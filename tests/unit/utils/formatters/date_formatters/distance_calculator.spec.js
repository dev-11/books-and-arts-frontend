import { get_sunday_of_week } from "@/utils/formatters/date_formatters/distance_calculator";

describe("get_sunday_of_week", () => {
    it("sunday of current week", () => {
        let sunday = get_sunday_of_week(new Date("06-01-2020"), 0);
        expect(sunday).toMatchObject(new Date("06-07-2020"));
    });

    it("sunday of current week from middle of week", () => {
        let sunday = get_sunday_of_week(new Date("06-04-2020"), 0);
        expect(sunday).toMatchObject(new Date("06-07-2020"));
    });

    it("sunday of current week when it is sunday already", () => {
        let sunday = get_sunday_of_week(new Date("06-07-2020"), 0);
        expect(sunday).toMatchObject(new Date("06-07-2020"));
    });

    it("sunday of prev week", () => {
        let sunday = get_sunday_of_week(new Date("06-01-2020"), -1);
        expect(sunday).toMatchObject(new Date("05-31-2020"));
    });

    it("sunday of next week", () => {
        let sunday = get_sunday_of_week(new Date("06-01-2020"), 1);
        expect(sunday).toMatchObject(new Date("06-14-2020"));

    });

    it("sunday of current week test 2", () => {
        let sunday = get_sunday_of_week(new Date("05-27-2020"), 0);
        expect(sunday).toMatchObject(new Date("05-31-2020"));

    }); 
});