export function days_since_monday(date){
    let day_number = date.getDay();
    return (day_number === 0 ? 7 : day_number % 7) - 1;
}

export function days_til_sunday(date){
    return 7 - date.getDay();
}

export function days_between_dates(date_1, date_2){
    let diff = date_2.getTime() - date_1.getTime();
    let diff_in_days = Math.floor(diff / (1000 * 3600 * 24));
    return Math.abs(diff_in_days);
}