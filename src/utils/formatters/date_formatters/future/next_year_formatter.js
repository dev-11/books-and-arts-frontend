import {days_between_dates} from "../distance_calculator";


export class NextYear{

    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        let distance = days_between_dates(this.reference_date, date);
        return this.reference_date.getFullYear()+1 === date.getFullYear() && distance > 365/2;
    }

    get_range_name(){
        return '';
    }
}
