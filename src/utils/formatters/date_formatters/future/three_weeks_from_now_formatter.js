import {days_til_sunday, days_between_dates} from "../distance_calculator";
import { week_length } from "../constants";


export class ThreeWeeksFromNow {

    constructor(reference_date, date){
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let distance = days_between_dates(this.reference_date, this.date);
        let dtl = days_til_sunday(this.date);
        return distance > dtl + (2 * week_length) && (distance < dtl + (3 * week_length));
    }

    get_range_name(){
        return "three weeks from now";
    }
}
