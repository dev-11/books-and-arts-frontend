import {days_between_dates} from "../distance_calculator";
import { Future } from "./future";


export class NextYear extends Future{

    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let distance = days_between_dates(this.reference_date, this.date);
        return this.reference_date.getFullYear()+1 === this.date.getFullYear() && distance > 365/2;
    }

    get_range_name(){
        return "next year";
    }
}
