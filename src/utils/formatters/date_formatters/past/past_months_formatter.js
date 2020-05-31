import { mlist } from "../constants";
import { Past } from "./past";


export class PastMonths extends Past {
    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        return this.date.getMonth()  <  this.reference_date.getMonth()-1;
    }

    get_range_name(){
        return "in " + mlist[this.date.getMonth()];
    }
}
