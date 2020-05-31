import { Past } from "./past";


export class YearsAgo extends Past {
    constructor(reference_date, date){
        super();
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        return this.reference_date.getFullYear() - this.date.getFullYear() > 1;
    }

    get_range_name(){
        let years = this.date.getFullYear() - this.reference_date.getFullYear();
        return Math.abs(years) + " years ago";
    }
}
