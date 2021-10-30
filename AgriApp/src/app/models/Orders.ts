export class orderModel{

    constructor(
        public farmerID:String,
        public orderID:String,
        public dealerID:String,
        public cropID:String
        
        
    )
        {
        this.farmerID=farmerID;
        this.orderID=orderID;
        this.dealerID=dealerID;
        this.cropID=cropID;
    }
}