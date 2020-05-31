import { smart_date, one_day_in_ms } from "../constants";
import { Past } from "./past";


export class DayBeforeYesterday extends Past {
    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        return this.reference_date.getTime()-(one_day_in_ms*2) === this.date.getTime();
    }

    get_range_name(){
        return smart_date.the_day_before_yesterday;
    }
}
