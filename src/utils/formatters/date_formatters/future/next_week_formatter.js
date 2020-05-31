import { get_sunday_of_week } from "../distance_calculator";
import { Future } from "./future";


export class NextWeek extends Future {

    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        let sunday_1 = get_sunday_of_week(this.reference_date, 1);
        let sunday_2 = get_sunday_of_week(this.date, 0);
        return sunday_1.getTime() === sunday_2.getTime();
    }

    get_range_name(){
        return "next week";
    }
}
