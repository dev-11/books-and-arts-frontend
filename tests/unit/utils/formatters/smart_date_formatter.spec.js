import { get_smart_date } from "@/utils/formatters/smart_date_formatter";


describe("smart_date_formatter.js new feature",()=>{

    // next features for upcoming publications
    // 01 DONE Today                    => 0
    // 02 DONE Tomorrow                 => 1
    // 03 DONE The day after tomorrow   => 2
    // 04 DONE This week                => 3+ && before next monday
    // 05 DONE Next week                => between next monday and sunday
    // 06 DONE 2 weeks from now         => between next next monday and next next sunday
    // 07 DONE 3 weeks from now         => between next next next monday and next next next sunday
    // 08 DONE This month               => beyond that, but within this month
    // 09 DONE Early next month         => next month between 01 and 10
    // 10 DONE Mid next month           => next month between 11 and 20
    // 11 DONE Late next month          => next month between 21 and last day 
    // 12 DONE Early {month}            => {month} between 01 and 10
    // 13 DONE Mid {month}              => {month} between 11 and 20
    // 14 DONE Late {month}             => {month} between 21 and last day 
    // 15 DONE Next Year                => next year but also more then a 6 months away
    // 16 DONE 2 years from now         => after the next year"s last day
    // 17 DONE yesterday                => -1
    // 18 DONE the day before yesterday => -2
    // 19 DONE came out this week       => after or on monday but more than 2 days ago
    // 20 DONE came out last week       => between last monday and sunday  // write test for sunday and monday
    // 21 DONE came out 2 weeks ago
    // 22 DONE came out 3 weeks ago 
    // 23 DONE came out this month
    // 24 DONE came out last month
    // 25 DONE came out in {month}
    // 26 DONE came out last year
    // 27 DONE  came out {x} years ago

    Date.now = jest.fn(() => new Date('05-01-2020'));
    it("test for today", () => {
        expect(get_smart_date(new Date('05-01-2020'))).toBe("today");
    });
    it("test for tomorrow", () => {
        expect(get_smart_date(new Date('05-02-2020'))).toBe("tomorrow");
    });

    it("test for the day after tomorrow", () => {
        expect(get_smart_date(new Date('05-03-2020'))).toBe("the day after tomorrow");
    });

    it("test for this week", () => {
        Date.now = jest.fn(() => new Date('05-05-2020'));
        expect(get_smart_date(new Date('05-10-2020'))).toBe("this week");
    });

    it("test for next week (Monday)", () => {
        Date.now = jest.fn(() => new Date('05-05-2020'));
        expect(get_smart_date(new Date('05-11-2020'))).toBe("next week");
    });

    it("test for next week (Sunday)", () => {
        Date.now = jest.fn(() => new Date('05-05-2020'));
        expect(get_smart_date(new Date('05-17-2020'))).toBe("next week");
    });


    it("test for two weeks from now (Monday)", () => {
        Date.now = jest.fn(() => new Date('05-05-2020'));
        expect(get_smart_date(new Date('05-18-2020'))).toBe("two weeks from now");
    });

    it("test for two weeks from now (Sunday)", () => {
        Date.now = jest.fn(() => new Date('05-05-2020'));
        expect(get_smart_date(new Date('05-24-2020'))).toBe("two weeks from now");
    });

    it("test for three weeks from now (Monday)", () => {
        Date.now = jest.fn(() => new Date('05-05-2020'));
        expect(get_smart_date(new Date('05-25-2020'))).toBe("three weeks from now");
    });

    it("test for three weeks from now (Sunday)", () => {
        Date.now = jest.fn(() => new Date('05-05-2020'));
        expect(get_smart_date(new Date('05-31-2020'))).toBe("three weeks from now");
    });

    it("test for this month", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('05-31-2020'))).toBe("this month");
    });

    it("test for coming in mid August month", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('08-15-2020'))).toBe("coming in mid August");
    });

    it("test for coming in early September month", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('09-01-2020'))).toBe("coming in early September");
    });

    it("test for coming in late November month", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('11-25-2020'))).toBe("coming in late November");
    });

    it("test for coming in mid next month", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('06-15-2020'))).toBe("coming in mid next month");
    });

    it("test for coming in early next month", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('06-01-2020'))).toBe("coming in early next month");
    });

    it("test for coming in late next month", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('06-25-2020'))).toBe("coming in late next month");
    });

    it("test for next year", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('01-01-2021'))).toBe("next year");
    });

    it("test for next year but within a month", () => {
        Date.now = jest.fn(() => new Date('12-10-2020'));
        expect(get_smart_date(new Date('01-02-2021'))).toBe("three weeks from now");
    });

    it("test for next year but within 6 month", () => {
        Date.now = jest.fn(() => new Date('12-10-2020'));
        expect(get_smart_date(new Date('04-02-2021'))).toBe("coming in early April");
    });

    it("test for 2 years from now", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('01-01-2022'))).toBe("2 years from now");
    });

    ///
    /// test for past
    //
    it("test for yesterday", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('04-30-2020'))).toBe("yesterday");
    });

    it("test for the day before yesterday", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('04-29-2020'))).toBe("the day before yesterday");
    });

    it("test for this week 2", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('04-28-2020'))).toBe("this week");
    });

    it("test for came out last week", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('04-25-2020'))).toBe("last week");
    });

    it("test for came out 2 weeks ago", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('04-17-2020'))).toBe("two weeks ago");
    });

    it("test for came out 3 weeks ago", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('04-10-2020'))).toBe("three weeks ago");
    });

    it("test for came out this month", () => {
        Date.now = jest.fn(() => new Date('05-28-2020'));
        expect(get_smart_date(new Date('05-01-2020'))).toBe("earlier this month");
    });

    it("test for came out early last month", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('04-01-2020'))).toBe("early last month");
    });

    it("test for came out in late february", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('02-29-2020'))).toBe("late February");
    });

    it("test for came out in mid february", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('02-15-2020'))).toBe("mid February");
    });

    it("test for came out in early february", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('02-02-2020'))).toBe("early February");
    });

    it("test for came out last year", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('04-29-2019'))).toBe("last year");
    });

    it("test for came out two years ago", () => {
        Date.now = jest.fn(() => new Date('05-01-2020'));
        expect(get_smart_date(new Date('04-29-2018'))).toBe("2 years ago");
    });
});
