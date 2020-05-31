export class YearsAgo{
    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        return this.reference_date.getFullYear() > date.getFullYear() - 1;
    }

    get_range_name(){
        return "";
    }
}
