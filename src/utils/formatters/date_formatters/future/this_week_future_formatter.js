import {days_since_monday, days_between_dates} from "../distance_calculator";


export class ThisWeekFuture {

    constructor(reference_date, date){
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let distance = days_between_dates(this.reference_date, this.date);
        return distance > 2 && distance < days_since_monday(this.date);
    }

    get_range_name(){
        return "this week";
    }
}
