import { days_til_sunday, days_between_dates } from "../distance_calculator";
import { week_length } from "../constants";
import { Future } from "./future";


export class ThisMonthFuture extends Future {

    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let distance = days_between_dates(this.reference_date, this.date);
        return distance > days_til_sunday(this.date) + (3 * week_length)
            && this.date.getFullYear() === this.reference_date.getFullYear()
            && this.date.getMonth() === this.reference_date.getMonth()
    }

    get_range_name(){
        return "this month";
    }
}
