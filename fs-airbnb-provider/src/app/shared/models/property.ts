export class Property {
    _id: String;
    property_name: String;
    property_location: String;
    property_price: Number;
    property_image_url: String;
    user_id: String;

    constructor( property_name, property_location, property_price, property_image_url, user_id){
        this.property_name = property_name;
        this.property_location = property_location;
        this.property_price = property_price;
        this.property_image_url = property_image_url;
        this.user_id = user_id;
    }
}
