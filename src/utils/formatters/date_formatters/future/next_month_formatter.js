import { last_day_of_next_month, days_between_dates } from "../distance_calculator";
import { week_length } from "../constants";
import { Future } from "./future";


export class NextMonth extends Future {

    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let distance = days_between_dates(this.reference_date,this.date);
        let last_dalast_day_of_next_monthy_next_month = last_day_of_next_month(this.reference_date);
        let days_til_last_day_next_month = days_between_dates(this.reference_date, last_dalast_day_of_next_monthy_next_month) + 1;
        return distance > (3 * week_length)
            && distance <= days_til_last_day_next_month
            && this.date.getMonth() === this.reference_date.getMonth()+1;
    }

    get_range_name(){
        return "next month";
    }
}
