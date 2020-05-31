import { days_til_sunday, days_between_dates } from "../distance_calculator";
import { week_length } from "../constants";

export class ThisMonthFuture{

    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        let distance = days_between_dates(this.reference_date, date);
        return distance > days_til_sunday(date) + (3 * week_length)
            && date.getMonth() === this.reference_date.getMonth()
    }

    get_range_name(){
        return '';
    }
}
