import {days_since_monday, days_between_dates} from "../distance_calculator";
import { week_length } from "../constants";


export class LastWeek{
    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        let distance = days_between_dates(date, this.reference_date);
        let dsm = days_since_monday(this.reference_date);
        return distance >= dsm && distance <= dsm + week_length;
    }

    get_range_name(){
        return "";
    }
}
