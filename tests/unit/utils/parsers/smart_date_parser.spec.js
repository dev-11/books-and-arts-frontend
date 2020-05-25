import get_smart_number from "@/utils/parsers/smart_date_parser";


describe("smart_date_parser.js",()=>{
    it("day 0 returns today", () => {
        expect(get_smart_number(0)).toBe('today');
    });

    it("day 1 returns yesterday", () => {
        expect(get_smart_number(1)).toBe('yesterday');
    });

    it("day 2 returns yesterday", () => {
        expect(get_smart_number(2)).toBe('the day before yesterday');
    });

    it("day -1 returns tomorrow", () => {
        expect(get_smart_number(-1)).toBe('tomorrow');
    });

    it("day -2 returns the day after tomorrow", () => {
        expect(get_smart_number(-2)).toBe('the day after tomorrow');
    });

    it("day 3 returns the 3 days ago", () => {
        expect(get_smart_number(3)).toBe('3 days ago');
    });

    it("day -3 returns the 3 days from now", () => {
        expect(get_smart_number(-3)).toBe('3 days from now');
    });

// next features
// Today                    => 0 
// Tomorrow                 => 1
// The day after Tomorrow   => 2
// This week                => 3+ && before next monday
// Next week                => between next monday and sunday
// 2 weeks from now         => between next next monday and next next sunday
// 3 weeks from now         => between next next next monday and next next next sunday
// This month               => beyond that, but within this month
// Early next month         => next month between 01 and 10
// Mid next month           => next month between 11 and 20
// Late next month          => next month between 21 and last day 
// Early {June}             => {month} between 01 and 10
// Mid {June}               => {month} between 11 and 20
// Late {June}              => {month} between 21 and last day 
// Next Year                => next year but also more then a 3 months away
// 2 years from now         => after the next year's last day

});