import {days_between_dates} from "../distance_calculator";
import { Past } from "./past";


export class LastYear extends Past {
    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let distance = days_between_dates(this.date, this.reference_date);
        return this.reference_date.getFullYear()-1 === this.date.getFullYear() && distance > 365/2;    }

    get_range_name(){
        return "last year";
    }
}
