import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { cropModel } from '../models/cropModel';
import { orderModel } from '../models/Orders';
import { paymentModel } from '../models/paymentModal';
import { userModel } from '../models/userModel';
import { AdminServicesService } from '../Services/admin-services.service';
import { DealerService } from '../Services/dealer.service';
@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {

  constructor(private adminService: AdminServicesService, private dealerService: DealerService, private fb: FormBuilder, private router:Router) { }

  payForm!: FormGroup;
  farmerList: userModel[] = [];
  searchedKeyword!: string;
  currentFarmer: userModel = new userModel("", "", "", "", "", "", "");
  currentCrop: cropModel = new cropModel("", "", "", 0, "", "", "", "");
  MyOrders: orderModel[] = [];
  order: orderModel = new orderModel("", "", "", "", "", "", "", "", "", "","");
  currentUser: userModel = new userModel("", "", "", "", "", "", "");

  paymentObj: paymentModel = new paymentModel("", "", "", "", "", "");
  oID: number = 100;
  orderId!: String;
  faCoffee = faCoffee;

  CropList: cropModel[] = [];
  loggeduser: userModel = new userModel("", "", "", "", "", "", "");
  

  ngOnInit(): void {

    this.payForm = this.fb.group(
      {
        paymentAmount: [""]
      }
    )
    this.loggeduser = JSON.parse(sessionStorage.loggedUser);
    this.getMyOrders();
    this.currentUser = this.adminService.currentUser;
    this.adminService.getALLCrops().subscribe(res => {
      this.CropList = res
      sessionStorage.setItem('croplist', JSON.stringify(this.CropList));

    });
    this.CropList = JSON.parse(sessionStorage.croplist);
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
  // function to get farmer of specific crop
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
    this.dealerService.getMyOrders(this.loggeduser.userId).subscribe(res => {
      this.MyOrders = res;
      console.log(this.MyOrders);
    })
  }

  // function to place an order
  placeOrder(farmerId: String, cropId: String, farmerName: String, farmerMobile: String, cropName: String, orderAmount:String) {
    this.oID = this.oID + 1
    this.orderId = this.loggeduser.userId + Math.random().toString(36).substr(2, 9);
    console.log((this.orderId));
    this.order = new orderModel(farmerId, this.orderId, this.loggeduser.userId, cropId, this.loggeduser.userName,
      farmerName, this.loggeduser.mobileNo, farmerMobile, "Ordered", cropName,orderAmount);
    this.dealerService.addOrder(this.order).subscribe(res => {
      if (res != null)
        alert("order Placed successfully");
    })
    this.getMyOrders();
    this.ngOnInit();
  }

// function to pay
  payNow(pOrder: orderModel) {
    this.order = pOrder;
  }

  // function to add payment to databse via microservice
  addPayment(orderId: String, orderName: String, paymentTo: String, paymentFrom: String,orderAmount:String) {

    this.paymentObj.paymentID = "P" + Math.random().toString(36).substr(2, 9);
    this.paymentObj.orderID = orderId;
    this.paymentObj.orderName = orderName;
    this.paymentObj.paymentTo = paymentTo;
    this.paymentObj.paymentFrom = paymentFrom;
    this.paymentObj.paymentAmount = orderAmount;
    this.dealerService.makePayment(this.paymentObj).subscribe(res => { alert("Payment Successfull.") });
    this.changeOrderStatus(this.order, "Completed");
    this.getMyOrders();
  }


  // function to change order status
  changeOrderStatus(order: orderModel, status: String) {
    this.order.orderID = order.orderID;
    this.order.cropID = order.cropID;
    this.order.cropName = order.cropName;
    this.order.dealerID = order.dealerID;
    this.order.dealerName = order.dealerName;
    this.order.dealerMobile = order.dealerMobile;
    this.order.farmerID = order.farmerID;
    this.order.farmerName = order.farmerName;
    this.order.farmerMobile = order.farmerMobile;
    this.order.orderStatus = status;
    this.dealerService.addOrder(this.order).subscribe();
    this.getMyOrders();
  }

  // checkUser(user:userModel){
    
  //   if(user==null){
  //     alert("You need To Login To see This Page..!");
  //     this.router.navigate(['/landing'])
  //     return false
      
  //   }
  //   else
  //   return true
    
  // }
  // redirect(){
  //   alert("Log in to view this page")
  //   this.router.navigate([''])
  // }

}
