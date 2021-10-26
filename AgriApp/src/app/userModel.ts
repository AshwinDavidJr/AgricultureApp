export class userModel{

    constructor(
        public userId:String,
        public userName:String,
        public userEmail:String,
        public password:String
        ,public location:String
        ,public accountNo:String,
        public mobileNo:String,
        public userType:String)
        
        {
        this.userId=userId;
        this.userName=userName;
        this.userEmail=userEmail;
        this.password=password;
        this.location=location;
        this.accountNo=accountNo;
        this.mobileNo=mobileNo;
        this.userType=userType;
    }
}