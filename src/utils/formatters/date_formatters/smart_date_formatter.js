import "./constants";
import { get_formatters } from "./formatters_factory";

function get_smart_date(date) {
    let now = new Date(Date.now()); // to make it testable

    let formatters = get_formatters(now, date);

    let count = 0;
    formatters.forEach(f => {
        if(f.in_range()){
            count++;
        }
    });

    if(count > 2){
        console.log(count);
        console.log("--------");    
    }

    let prefix = "";

    let formatter = formatters.find(item => item.in_range());
    if(formatter.get_type() === "past"){
        prefix = "came out in"
    }
    else if(formatter.get_type() === "future"){
        prefix = "coming in"
    }
    return formatter ? prefix + " "+formatter.get_range_name() : date;
}

export {
    get_smart_date
};
