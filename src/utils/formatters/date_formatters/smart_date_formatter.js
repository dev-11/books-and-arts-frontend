import "./constants";
import { get_formatters } from "./formatters_factory";

function get_smart_date(date) {
    let now = new Date(Date.now()); // to make it testable

    let formatter = get_formatters(now, date).find(item => item.in_range());
    return formatter ? formatter.get_range_name() : date;
}

export {
    get_smart_date
};
