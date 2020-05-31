import { smart_date } from "../constants";


export class Today {

    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        return this.reference_date.getTime() === date.getTime();
    }

    get_range_name(){
        return smart_date.today;
    }
}
