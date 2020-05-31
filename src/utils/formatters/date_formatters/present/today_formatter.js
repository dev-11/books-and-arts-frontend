import { smart_date } from "../constants";


export class Today {

    constructor(reference_date, date){
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
