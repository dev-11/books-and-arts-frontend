export class FutureMonth{

    constructor(reference_date, date){
        this.reference_date = reference_date;
        this.date = date;
    }

    in_range(){
        return this.date.getMonth() > this.reference_date.getMonth()+1;
    }

    get_range_name(){
        return '';
    }
}
