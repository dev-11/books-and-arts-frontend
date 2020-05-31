import { smart_date, one_day_in_ms } from "../constants";


export class DayAfterTomorrow{

    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        return this.reference_date.getTime()+(one_day_in_ms * 2) === date.getTime();
    }

    get_range_name(){
        return smart_date.the_day_after_tomorrow;
    }
}
