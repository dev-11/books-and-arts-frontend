import get_smart_number from "@/utils/formatters/smart_number_formatter";


describe("smart_number_formatter.js", () => {
    it("0 returns 0", ()=> {
        expect(get_smart_number(0)).toBe("0");
    });

    it("100 returns 100", ()=> {
        expect(get_smart_number(100)).toBe("100");
    });

    it("994 returns 994", ()=> {
        expect(get_smart_number(994)).toBe("994");
    });

    it("995 returns 1k", ()=> {
        expect(get_smart_number(995)).toBe("1k");
    });

    it("1000 returns 1k", ()=> {
        expect(get_smart_number(1000)).toBe("1k");
    });

    it("1100 returns 1.1k", ()=> {
        expect(get_smart_number(1100)).toBe("1.1k");
    });

    it("1150 returns 1.1k", ()=> {
        expect(get_smart_number(1150)).toBe("1.1k");
    });

    it("1151 returns 1.2k", ()=> {
        expect(get_smart_number(1151)).toBe("1.2k");
    });

    it("10900 returns 10.9k", ()=> {
        expect(get_smart_number(10900)).toBe("10.9k");
    });

});