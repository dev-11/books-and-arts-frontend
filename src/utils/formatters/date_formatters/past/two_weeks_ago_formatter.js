import {days_since_monday, days_between_dates} from "../distance_calculator";
import { week_length } from "../constants";


export class TwoWeeksAgo{
    constructor(reference_date, date){
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let distance = days_between_dates(this.date, this.reference_date);
        let dsm = days_since_monday(this.reference_date);
        return distance >= dsm + week_length && distance <= dsm + (2 * week_length);
    }

    get_range_name(){
        return "";
    }
}