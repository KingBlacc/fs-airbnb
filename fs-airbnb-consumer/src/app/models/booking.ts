export class Booking {
    
    date_from: String;
    date_to: String;
    user_id: String;
    property_id: String;
    booking_status: String;
    
    constructor(date_from, date_to, user_id, property_id, booking_status){
       this.date_from = date_from;
       this.date_to = date_to;
       this.user_id = user_id;
       this.property_id = property_id;
       this.booking_status = booking_status;
    }

}
