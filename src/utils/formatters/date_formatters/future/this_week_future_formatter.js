import { get_sunday_of_week, days_between_dates } from "../distance_calculator";
import { Future } from "./future";


export class ThisWeekFuture extends Future {

    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let distance = days_between_dates(this.reference_date, this.date);
        let sunday_1 = get_sunday_of_week(this.reference_date, 0);
        let sunday_2 = get_sunday_of_week(this.date, 0);
        return distance > 2 && sunday_1.getTime() === sunday_2.getTime() ;
    }

    get_range_name(){
        return "this week";
    }
}
