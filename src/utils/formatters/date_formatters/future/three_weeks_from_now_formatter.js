import {days_til_sunday, days_between_dates} from "../distance_calculator";
import { week_length } from "../constants";
import { Future } from "./future";


export class ThreeWeeksFromNow extends Future {

    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let distance = days_between_dates(this.reference_date, this.date);
        let dtl = days_til_sunday(this.date);
        return distance > dtl + (2 * week_length) && (distance < dtl + (3 * week_length));
    }

    get_range_name(){
        return "in three weeks";
    }
}
