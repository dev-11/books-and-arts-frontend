// import { get_smart_date } from "@/utils/formatters/date_formatters/smart_date_formatter";

describe("", () => {
    it("", () => {
    });
});

// describe("smart_date_formatter.js new feature",()=>{

//     // next features for upcoming publications
//     // 09 DONE Early next month         => next month between 01 and 10
//     // 10 DONE Mid next month           => next month between 11 and 20
//     // 11 DONE Late next month          => next month between 21 and last day 
//     // 12 DONE Early {month}            => {month} between 01 and 10
//     // 13 DONE Mid {month}              => {month} between 11 and 20
//     // 14 DONE Late {month}             => {month} between 21 and last day 
//     // 24 DONE came out last month
//     // 25 DONE came out in {month}

//     Date.now = jest.fn(() => new Date('05-01-2020'));

//     it("test for coming in mid August month", () => {
//         Date.now = jest.fn(() => new Date('05-01-2020'));
//         expect(get_smart_date(new Date('08-15-2020'))).toBe("coming in mid August");
//     });

//     it("test for coming in early September month", () => {
//         Date.now = jest.fn(() => new Date('05-01-2020'));
//         expect(get_smart_date(new Date('09-01-2020'))).toBe("coming in early September");
//     });

//     it("test for coming in late November month", () => {
//         Date.now = jest.fn(() => new Date('05-01-2020'));
//         expect(get_smart_date(new Date('11-25-2020'))).toBe("coming in late November");
//     });

//     it("test for coming in mid next month", () => {
//         Date.now = jest.fn(() => new Date('05-01-2020'));
//         expect(get_smart_date(new Date('06-15-2020'))).toBe("coming in mid next month");
//     });

//     it("test for coming in early next month", () => {
//         Date.now = jest.fn(() => new Date('05-01-2020'));
//         expect(get_smart_date(new Date('06-01-2020'))).toBe("coming in early next month");
//     });

//     it("test for coming in late next month", () => {
//         Date.now = jest.fn(() => new Date('05-01-2020'));
//         expect(get_smart_date(new Date('06-25-2020'))).toBe("coming in late next month");
//     });

//     it("test for next year", () => {
//         Date.now = jest.fn(() => new Date('05-01-2020'));
//         expect(get_smart_date(new Date('01-01-2021'))).toBe("next year");
//     });

//     it("test for next year but within a month", () => {
//         Date.now = jest.fn(() => new Date('12-10-2020'));
//         expect(get_smart_date(new Date('01-02-2021'))).toBe("three weeks from now");
//     });

//     it("test for next year but within 6 month", () => {
//         Date.now = jest.fn(() => new Date('12-10-2020'));
//         expect(get_smart_date(new Date('04-02-2021'))).toBe("coming in early April");
//     });

//     it("test for 2 years from now", () => {
//         Date.now = jest.fn(() => new Date('05-01-2020'));
//         expect(get_smart_date(new Date('01-01-2022'))).toBe("2 years from now");
//     });




// });
