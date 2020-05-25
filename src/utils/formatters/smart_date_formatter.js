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

    return Math.abs(days) + ((days > 0) ? " days ago" :" days from now");

}

export default get_smart_date;
