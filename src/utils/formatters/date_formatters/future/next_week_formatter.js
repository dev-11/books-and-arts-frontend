import {days_til_sunday, days_between_dates} from "../distance_calculator";
import { week_length } from "../constants";

export class NextWeek{

    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        let distance = days_between_dates(this.reference_date, date);
        let dtl = days_til_sunday(date);
        return distance > dtl && (distance < dtl + week_length);
    }

    get_range_name(){
        return '';
    }
}
