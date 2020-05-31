import { smart_date } from "../constants";
import { Present } from "./present";


export class Today extends Present {

    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        return this.reference_date.getTime() === this.date.getTime();
    }

    get_range_name(){
        return smart_date.today;
    }
}
