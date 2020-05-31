import {days_since_monday, days_between_dates} from "../distance_calculator";
import { Past } from "./past";


export class ThisWeekPast extends Past {
    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let distance = days_between_dates(this.date, this.reference_date);
        return distance > 2 && distance < days_since_monday(this.reference_date);
    }

    get_range_name(){
        return "this week";
    }
}
