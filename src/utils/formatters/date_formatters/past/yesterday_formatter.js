import { smart_date, one_day_in_ms } from "../constants";
import { Past } from "./past";


export class Yesterday extends Past {
    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        return this.reference_date.getTime()-one_day_in_ms === this.date.getTime();
    }

    get_range_name(){
        return smart_date.yesterday;
    }
}
