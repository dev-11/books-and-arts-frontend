export class YearsAgo{
    constructor(reference_date, date){
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        return this.reference_date.getFullYear() > this.date.getFullYear() - 1;
    }

    get_range_name(){
        return "";
    }
}
