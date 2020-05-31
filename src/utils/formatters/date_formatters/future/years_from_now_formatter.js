export class YearsFromNow{

    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        return this.reference_date.getFullYear() + 1 < date.getFullYear();
    }

    get_range_name(){
        return '';
    }
}
