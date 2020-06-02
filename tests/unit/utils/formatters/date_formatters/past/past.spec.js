import { Past } from "@/utils/formatters/date_formatters/past/past.js";

describe("Past", () => {
    it("type is past", () => {
        var p = new Past();
        expect(p.get_type()).toBe("past");
    });
});