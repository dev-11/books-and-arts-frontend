import { days_til_sunday, days_between_dates } from "../distance_calculator";
import { Future } from "./future";


export class ThisWeekFuture extends Future {

    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let distance = days_between_dates(this.reference_date, this.date);
        return distance > 2 && distance < days_til_sunday(this.date);
    }

    get_range_name(){
        return "this week";
    }
}
