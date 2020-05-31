export class FutureMonth{

    constructor(reference_date){
        this.reference_date = reference_date;
    }

    in_range(date){
        return date.getMonth() > this.reference_date.getMonth()+1;
    }

    get_range_name(){
        return '';
    }
}
