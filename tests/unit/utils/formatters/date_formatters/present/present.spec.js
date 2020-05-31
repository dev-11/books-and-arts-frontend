import { Present } from "@/utils/formatters/date_formatters/present/present.js";

describe("Present", () => {
    it("type is present", () => {
        var p = new Present();
        expect(p.get_type()).toBe("present");
    })
});