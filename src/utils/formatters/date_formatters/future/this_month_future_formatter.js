import { get_sunday_of_week, days_between_dates } from "../distance_calculator";
import { week_length } from "../constants";
import { Future } from "./future";


export class ThisMonthFuture extends Future {

    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let sunday_1 = get_sunday_of_week(this.reference_date, 0);
        let sunday_2 = get_sunday_of_week(this.date, 0);
        let distance = days_between_dates(sunday_1, sunday_2);
        return distance > 3 * week_length
            && this.date.getFullYear() === this.reference_date.getFullYear()
            && this.date.getMonth() === this.reference_date.getMonth()
    }

    get_range_name(){
        return "this month";
    }
}
