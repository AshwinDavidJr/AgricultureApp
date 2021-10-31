export class orderModel{

    constructor(
        public farmerID:String,
        public orderID:String,
        public dealerID:String,
        public cropID:String,
        public dealerName:String,
        public farmerName:String,
        public dealerMobile:String,
        public farmerMobile:String,
        public orderStatus:String,
        public cropName:String,
        public orderAmount:String
        
    )
        {
        this.farmerID=farmerID;
        this.orderID=orderID;
        this.dealerID=dealerID;
        this.cropID=cropID;
        this.dealerName=dealerName;
        this.farmerName=farmerName;
        this.dealerMobile=dealerMobile;
        this.farmerMobile=farmerMobile;
        this.orderStatus=orderStatus;
        this.cropName=cropName;
        this.orderAmount=orderAmount;
        
    }
}