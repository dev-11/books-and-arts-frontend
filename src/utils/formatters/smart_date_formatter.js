function get_smart_date(days) {
    if (days === 0) {
        return "today"
    }

    if (days === 1) {
        return 'yesterday'
    }

    if (days === 2) {
        return 'the day before yesterday'
    }

    if (days === -1) {
        return 'tomorrow'
    }

    if (days === -2) {
        return 'the day after tomorrow'
    }

    return Math.abs(days) + ((days > 0) ? " days ago" : " days from now");

}

const mlist = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const month_sections = [
    "early",
    "mid",
    "late"
]

function g_s_d(date) {
    let now = new Date(Date.now()); // to make it testable
    let diff = date.getTime() - now.getTime();
    let diff_in_days = Math.floor(diff / (1000 * 3600 * 24));

    if(diff_in_days < 0) {
        let abs_days = Math.abs(diff_in_days);
        if (abs_days === 1) {
            return 'yesterday';
        }
    
        if (abs_days === 2) {
            return 'the day before yesterday';
        }

        var week_length = 7;

        var days_from_monday = now.getDay() + 1;
        if (abs_days > 2 && abs_days <= days_from_monday) {
            return "this week";
        }

        if (abs_days > days_from_monday && abs_days <= days_from_monday + week_length) {
            return "last week";
        }
    }

    if(now.getFullYear()+1 === date.getFullYear() && diff_in_days > 365/2){
        return "next year"
    }else if (now.getFullYear()+1 < date.getFullYear()){
        let years = date.getFullYear() - now.getFullYear();
        return years + " years from now";
    }

    if (diff_in_days == 0) {
        return 'today';
    }
    if (diff_in_days === 1) {
        return 'tomorrow';
    }

    if (diff_in_days === 2) {
        return 'the day after tomorrow';
    }

    var week_length = 7;

    var days_til_sunday = week_length - now.getDay();
    if (diff_in_days > 2 && diff_in_days <= days_til_sunday) {
        return "this week";
    }

    if (diff_in_days > days_til_sunday && diff_in_days <= days_til_sunday + week_length) {
        return "next week"
    }

    if (diff_in_days > days_til_sunday + week_length && diff_in_days <= days_til_sunday + (2 * (week_length))) {
        return "two weeks from now"
    }

    if (diff_in_days > days_til_sunday + (2 * week_length) && diff_in_days <= days_til_sunday + (3 * (week_length))) {
        return "three weeks from now"
    }

    if (diff_in_days > days_til_sunday + (3 * week_length) && date.getMonth() === now.getMonth()) {
        return "this month"
    }

    let m_section = 0;
    let day_of_month = date.getDate();
    if (day_of_month <= 10) {
        m_section = 0;
    } else if (day_of_month <= 20) {
        m_section = 1;
    } else {
        m_section = 2;
    }

    let month_name = date.getMonth() - 1 == now.getMonth() ? "next month" : mlist[date.getMonth()];

    return "coming in " + month_sections[m_section] + " " + month_name;
}

export {
    get_smart_date,
    g_s_d
};