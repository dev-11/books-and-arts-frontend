import { get_sunday_of_week, days_between_dates } from "../distance_calculator";
import { Past } from "./past";


export class LastWeek extends Past {
    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let distance = days_between_dates(this.date, this.reference_date);
        let sunday_1 = get_sunday_of_week(this.reference_date, -1);
        let sunday_2 = get_sunday_of_week(this.date, 0);
        return sunday_1.getTime() === sunday_2.getTime() && distance > 2;
    }

    get_range_name(){
        return "last week";
    }
}
