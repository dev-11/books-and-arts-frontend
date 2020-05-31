import { Future } from "./future";


export class YearsFromNow extends Future {

    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        return this.reference_date.getFullYear() + 1 < this.date.getFullYear();
    }

    get_range_name(){
        return "int " + (this.date.getFullYear() - this.reference_date.getFullYear()) + " years";
    }
}
