import { get_formatters } from "@/utils/formatters/date_formatters/formatters_factory";

import { Today } from "@/utils/formatters/date_formatters/present/today_formatter";

import { Yesterday } from "@/utils/formatters/date_formatters/past/yesterday_formatter";
import { DayBeforeYesterday } from "@/utils/formatters/date_formatters/past/the_day_before_yesterday_formatter";
import { LastMonth } from "@/utils/formatters/date_formatters/past/last_month_formatter.js";
import { LastWeek } from "@/utils/formatters/date_formatters/past/last_week_formatter.js";
import { LastYear } from "@/utils/formatters/date_formatters/past/last_year_formatter.js";
import { PastMonths } from "@/utils/formatters/date_formatters/past/past_months_formatter.js";
import { ThisMonthPast } from "@/utils/formatters/date_formatters/past/this_month_past_formatter";
import { ThisWeekPast } from "@/utils/formatters/date_formatters/past/this_week_past_formatter.js";
import { ThreeWeeksAgo } from "@/utils/formatters/date_formatters/past/three_weeks_ago_formatter.js";
import { TwoWeeksAgo } from "@/utils/formatters/date_formatters/past/two_weeks_ago_formatter.js";
import { YearsAgo } from "@/utils/formatters/date_formatters/past/years_ago_formatter.js";

import { Tomorrow } from "@/utils/formatters/date_formatters/future/tomorrow_formatter";
import { DayAfterTomorrow } from "@/utils/formatters/date_formatters/future/the_day_after_tomorrow_formatter";
import { FutureMonth } from "@/utils/formatters/date_formatters/future/future_month_formatter.js";
import { NextMonth } from "@/utils/formatters/date_formatters/future/next_month_formatter.js";
import { NextWeek } from "@/utils/formatters/date_formatters/future/next_week_formatter.js";
import { NextYear } from "@/utils/formatters/date_formatters/future/next_year_formatter.js";
import { ThisMonthFuture } from "@/utils/formatters/date_formatters/future/this_month_future_formatter";
import { ThisWeekFuture } from "@/utils/formatters/date_formatters/future/this_week_future_formatter.js";
import { ThreeWeeksFromNow } from "@/utils/formatters/date_formatters/future/three_weeks_from_now_formatter";
import { TwoWeeksFromNow } from "@/utils/formatters/date_formatters/future/two_weeks_from_now_formatter";
import { YearsFromNow } from "@/utils/formatters/date_formatters/future/years_from_now_formatter.js";


describe("formatter factory tests", () =>{
    it("one formatter for today", () => {
        let date = new Date("05-01-2020")
        let formatters = get_formatters(date, date)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(Today);
    });

    // past

    it("one formatter for yesterday", () => {
        let date_1 = new Date("05-01-2020")
        let date_2 = new Date("04-30-2020")
        let formatters = get_formatters(date_1, date_2)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(Yesterday);
    });

    it("one formatter for the day before yesterday", () => {
        let date_1 = new Date("05-01-2020")
        let date_2 = new Date("04-29-2020")
        let formatters = get_formatters(date_1, date_2)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(DayBeforeYesterday);
    });

    it("one formatter for the this week", () => {
        let date_1 = new Date("05-01-2020")
        let date_2 = new Date("04-28-2020")
        let formatters = get_formatters(date_1, date_2)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(ThisWeekPast);
    });

    it("one formatter for the last week", () => {
        let date_1 = new Date("05-01-2020")
        let date_2 = new Date("04-26-2020")
        let formatters = get_formatters(date_1, date_2)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(LastWeek);
    });

    it("one formatter for the two weeks ago", () => {
        let date_1 = new Date("05-31-2020")
        let date_2 = new Date("05-17-2020")
        let formatters = get_formatters(date_1, date_2)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(TwoWeeksAgo);
    });

    it("one formatter for the three weeks ago", () => {
        let date_1 = new Date("05-31-2020")
        let date_2 = new Date("05-10-2020")
        let formatters = get_formatters(date_1, date_2)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(ThreeWeeksAgo);
    });

    it("one formatter for this month", () => {
        let date_1 = new Date("05-31-2020")
        let date_2 = new Date("05-03-2020")
        let formatters = get_formatters(date_1, date_2)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(ThisMonthPast);
    });

    it("one formatter for last month", () => {
        let date_1 = new Date("05-31-2020")
        let date_2 = new Date("04-30-2020")
        let formatters = get_formatters(date_1, date_2)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(LastMonth);
    });


    it("one formatter for past months" , () => {
        let date_1 = new Date("07-30-2020")
        let date_2 = new Date("02-03-2020")
        let formatters = get_formatters(date_1, date_2)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(PastMonths);
    });

    it("one formatter for last year" , () => {
        let date_1 = new Date("07-30-2020")
        let date_2 = new Date("12-31-2019")
        let formatters = get_formatters(date_1, date_2)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(LastYear);
    });

    it("one formatter for years ago" , () => {
        let date_1 = new Date("07-30-2020")
        let date_2 = new Date("12-31-2018")
        let formatters = get_formatters(date_1, date_2)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(YearsAgo);
    });

    // future 

    it("one formatter for tomorrow", () => {
        let date_1 = new Date("05-01-2020")
        let date_2 = new Date("05-02-2020")
        let formatters = get_formatters(date_1, date_2)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(Tomorrow);
    });

    it("one formatter for the day after tomorrow", () => {
        let date_1 = new Date("05-01-2020")
        let date_2 = new Date("05-03-2020")
        let formatters = get_formatters(date_1, date_2)
        let formatter = formatters.filter(item => item.in_range());
        expect(formatter.length).toBe(1);
        expect(formatter[0]).toBeInstanceOf(DayAfterTomorrow);
    });
    
});