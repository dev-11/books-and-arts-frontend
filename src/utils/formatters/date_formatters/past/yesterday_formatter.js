import { smart_date, one_day_in_ms } from "../constants";


export class Yesterday{
    constructor(reference_date, date){
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
