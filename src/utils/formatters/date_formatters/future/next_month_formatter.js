import { days_since_monday, days_between_dates } from "../distance_calculator";
import { week_length } from "../constants";


export class NextMonth{

    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        let distance = days_between_dates(this.reference_date, date);
        let dsm = days_since_monday(this.reference_date);
        return distance > dsm + (3 * week_length)
            && date.getMonth() === this.reference_date.getMonth()+1;
    }

    get_range_name(){
        return '';
    }
}
