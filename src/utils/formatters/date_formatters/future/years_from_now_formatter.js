export class YearsFromNow{

    constructor(reference_date, date){
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        return this.reference_date.getFullYear() + 1 < this.date.getFullYear();
    }

    get_range_name(){
        return '';
    }
}
