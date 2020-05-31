import {days_since_monday, days_between_dates} from "../distance_calculator";


export class ThisWeekFuture {

    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){

        let distance = days_between_dates(this.reference_date, date);
        return distance > 2 && distance < days_since_monday(date);
    }

    get_range_name(){
        return '';
    }
}
