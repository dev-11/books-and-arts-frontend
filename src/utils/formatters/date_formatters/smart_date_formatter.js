import "./constants";
import { get_formatters } from "./formatters_factory";

function get_smart_date(date) {
    let now = new Date(Date.now()); // to make it testable
    now.setHours(0,0,0,0);
    let formatters = get_formatters(now, date);

    let formatter = formatters.find((item) => item.in_range());

    let prefix = "out";
    if(formatter.get_type() === "past"){
        prefix = "came out";
    }
    else if(formatter.get_type() === "future"){
        prefix = "coming";
    }

    return prefix + " "+formatter.get_range_name();
}

export {
    get_smart_date
};
