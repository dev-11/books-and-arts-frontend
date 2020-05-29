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

function get_smart_date(date) {
    let now = new Date(Date.now()); // to make it testable
    let diff = date.getTime() - now.getTime();
    let diff_in_days = Math.floor(diff / (1000 * 3600 * 24));
    var week_length = 7;

    if(diff_in_days < 0) {
        let abs_days = Math.abs(diff_in_days);

        if(now.getFullYear()-1 === date.getFullYear() && abs_days > 365/2){
            return "last year"
        }else if (date.getFullYear() < now.getFullYear()){
            let years =  now.getFullYear() - date.getFullYear();
            return years + " years ago";
        }

        if (abs_days === 1) {
            return 'yesterday';
        }
    
        if (abs_days === 2) {
            return 'the day before yesterday';
        }

        var days_since_monday = now.getDay() + 1;

        if (abs_days > 2 && abs_days < days_since_monday) {
            return "this week";
        }

        if (abs_days >= days_since_monday && abs_days <= days_since_monday + week_length) {
            return "last week";
        }

        if (abs_days >= days_since_monday + week_length && abs_days <= days_since_monday + (2 * week_length)) {
            return "two weeks ago";
        }

        if (abs_days >= days_since_monday + (2 * week_length) && abs_days <= days_since_monday + (3 * week_length)) {
            return "three weeks ago";
        }

        if (abs_days > days_since_monday + (3 * week_length) && date.getMonth() === now.getMonth()) {
            return "earlier this month"
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
    
        let month_name = date.getMonth() + 1 == now.getMonth() ? "last month" : mlist[date.getMonth()];
    
        return month_sections[m_section] + " " + month_name;
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

const one_day_in_ms = 86400000;

function factory_method(now){
    return [
        new DayBeforeYesterday(now),
        new Yesterday(now),
        new Today(now),
        new Tomorrow(now),
        new DayAfterTomorrow(now)
    ]
}

class DayBeforeYesterday{
    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        return this.reference_date.getTime()-(one_day_in_ms*2) === date.getTime();
    }

    get_range_name(){
        return smart_date.the_day_before_yesterday;
    }
}

class Yesterday{
    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        return this.reference_date.getTime()-one_day_in_ms === date.getTime();
    }

    get_range_name(){
        return smart_date.yesterday;
    }
}
class Today{

    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        return this.reference_date.getTime() === date.getTime();
    }

    get_range_name(){
        return smart_date.today;
    }
}

class Tomorrow{

    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        return this.reference_date.getTime()+one_day_in_ms === date.getTime();
    }

    get_range_name(){
        return smart_date.tomorrow;
    }
}

class DayAfterTomorrow{

    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        return this.reference_date.getTime()+(one_day_in_ms * 2) === date.getTime();
    }

    get_range_name(){
        return smart_date.the_day_after_tomorrow;
    }
}


export {
    get_smart_date
};