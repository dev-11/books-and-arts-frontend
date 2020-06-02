import { Today } from "./present/today_formatter";

import { Yesterday } from "./past/yesterday_formatter";
import { DayBeforeYesterday } from "./past/the_day_before_yesterday_formatter";
import { LastMonth } from "./past/last_month_formatter.js";
import { LastWeek } from "./past/last_week_formatter.js";
import { LastYear } from "./past/last_year_formatter.js";
import { PastMonths } from "./past/past_months_formatter.js";
import { ThisMonthPast } from "./past/this_month_past_formatter";
import { ThisWeekPast } from "./past/this_week_past_formatter.js";
import { ThreeWeeksAgo } from "./past/three_weeks_ago_formatter.js";
import { TwoWeeksAgo } from "./past/two_weeks_ago_formatter.js";
import { YearsAgo } from "./past/years_ago_formatter.js";

import { Tomorrow } from "./future/tomorrow_formatter";
import { DayAfterTomorrow } from "./future/the_day_after_tomorrow_formatter";
import { FutureMonth } from "./future/future_month_formatter.js";
import { NextMonth } from "./future/next_month_formatter.js";
import { NextWeek } from "./future/next_week_formatter.js";
import { NextYear } from "./future/next_year_formatter.js";
import { ThisMonthFuture } from "./future/this_month_future_formatter";
import { ThisWeekFuture } from "./future/this_week_future_formatter.js";
import { ThreeWeeksFromNow } from "./future/three_weeks_from_now_formatter";
import { TwoWeeksFromNow } from "./future/two_weeks_from_now_formatter";
import { YearsFromNow } from "./future/years_from_now_formatter.js";


export function get_formatters(now, date) {
    return [
        new YearsAgo(now, date),
        new LastYear(now, date),
        new PastMonths(now, date),
        new LastMonth(now, date),
        new ThisMonthPast(now, date),
        new ThreeWeeksAgo(now, date),
        new TwoWeeksAgo(now, date),
        new LastWeek(now, date),
        new ThisWeekPast(now, date),
        new DayBeforeYesterday(now, date),
        new Yesterday(now, date),
        new Today(now, date),
        new Tomorrow(now, date),
        new DayAfterTomorrow(now, date),
        new ThisWeekFuture(now, date),
        new NextWeek(now, date),
        new TwoWeeksFromNow(now, date),
        new ThreeWeeksFromNow(now, date),
        new ThisMonthFuture(now, date),
        new NextMonth(now, date),
        new FutureMonth(now, date),
        new NextYear(now, date),
        new YearsFromNow(now, date),
    ];
}