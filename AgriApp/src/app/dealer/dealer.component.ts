import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { cropModel } from '../models/cropModel';
import { orderModel } from '../models/Orders';
import { userModel } from '../models/userModel';
import { AdminServicesService } from '../Services/admin-services.service';
import { DealerService } from '../Services/dealer.service';
@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {

  constructor(private adminService: AdminServicesService, private dealerService: DealerService) { }
  farmerList: userModel[] = [];
  searchedKeyword!: string;
  currentFarmer: userModel = new userModel("", "", "", "", "", "", "");
  currentCrop: cropModel = new cropModel("", "", "", 0, "", "", "", "");
  MyOrders: orderModel[]=[];
order:orderModel=new orderModel("","","","");
  currentUser: userModel = new userModel("", "", "", "", "", "", "");

  oID:number=100;
  orderId!:String;
  faCoffee = faCoffee;

  CropList: cropModel[] = [];
  loggeduser: userModel = new userModel("", "", "", "", "", "", "");
  //crop:cropModel=new cropModel("","","",0,"","","","");

  ngOnInit(): void {

    
    this.loggeduser = JSON.parse(sessionStorage.loggedUser);
    this.getMyOrders();
    

    this.currentUser = this.adminService.currentUser;
    // console.log(this.adminService.currentUser);

    this.adminService.getALLCrops().subscribe(res => {
      this.CropList = res
      sessionStorage.setItem('croplist', JSON.stringify(this.CropList));

    });


    this.CropList = JSON.parse(sessionStorage.croplist);
    //console.log(this.CropList);


    //let crop = this.CropList[1];
    //console.log(crop);

    // for (let crop of this.CropList) {
    //   this.adminService.getUserById(crop.farmerId).subscribe(res => {
    //     if (res != null)
    //       if (this.checkIfpresent(res))
    //         this.farmerList.push(res)
    //     sessionStorage.setItem('FarmerList', JSON.stringify(this.farmerList))
    //   })

    // }

    // sessionStorage.removeItem('croplist')
    // this.farmerList = JSON.parse(sessionStorage.FarmerList);
    // console.log(this.farmerList);

  }

  checkIfpresent(data: userModel) {
    for (let x of this.farmerList) {
      if (data.userName == x.userName)
        return false;
    }
    return true;
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }




  // ----------------------------------------------------------------
  getFarmer(crop: cropModel) {
    this.currentCrop = crop;
    this.adminService.getUserById(crop.farmerId).subscribe(res => {
      if (res == null)
        this.currentFarmer = new userModel("", "", "", "", "", "", "")
      else
        this.currentFarmer = res;
    })
  }


  // function for getting all orders

  getMyOrders() {
    this.dealerService.getMyOrders(this.loggeduser.userId).subscribe(res=>{
      this.MyOrders=res;
      console.log(this.MyOrders);
    })
  }
  
  placeOrder(farmerId:String,cropId:String){
    this.oID=this.oID+1
    this.orderId=this.loggeduser.userId + Math.random().toString(36).substr(2, 9);
    console.log((this.orderId));
    

    this.order= new orderModel(farmerId,this.orderId,this.loggeduser.userId,cropId);
    this.dealerService.addOrder(this.order).subscribe(res=>{
      if(res!=null)
        alert("order Placed successfully");
    })
    this.getMyOrders();
  }




}
