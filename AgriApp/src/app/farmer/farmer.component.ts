import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { cropModel } from '../models/cropModel';
import { orderModel } from '../models/Orders';
import { userModel } from '../models/userModel';
import { AdminServicesService } from '../Services/admin-services.service';
import { DealerService } from '../Services/dealer.service';
import { FarmerService } from '../Services/farmer.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  loggeduser: userModel = new userModel("", "", "", "", "", "", "");
  myCropList: cropModel[] = [];
  cropObj: cropModel = new cropModel("", "", "", 0, "", "", "", "");
  searchedKeyword!: string;
  orderObj: orderModel = new orderModel("", "", "", "", "", "", "", "", "", "","")

  MyOrders: orderModel[] = [];
  formValueCrop!: FormGroup;
  constructor(private myService: FarmerService, private adminService: AdminServicesService, private fb: FormBuilder, private dealerService: DealerService,private router:Router) { }

  ngOnInit(): void {
    this.loggeduser = JSON.parse(sessionStorage.loggedUser);
    this.getMyCrops();
    this.getMyOrders();

    this.formValueCrop = this.fb.group(
      {
        farmerId: [""],
        cropId: [""],
        cropName: [""],
        cropQty: [""],
        cropType: [""],
        cropPrice: [""],
        cropDesc: [""],
        cropImgUrl: [""]
      }
    )
  }

  // Function to get inidividuals crop
  getMyCrops() {

    this.myService.getMyCrops(this.loggeduser.userId).subscribe(res => {
      this.myCropList = res
    })

  }

  // Function to delete crop
  deleteCrop(cropId: string) {
    console.log("in delete method" + cropId);

    this.adminService.DeleteCrop(cropId).subscribe(res => {
      console.log(res)
    });

    this.getMyCrops();

  }

  // Function to fill farmerid in the form
  fillFarmerId() {
    this.formValueCrop.controls['farmerId'].setValue(this.loggeduser.userId);
  }

  // Function to add crop
  addCrop() {
    console.log("in add crop method");
    this.cropObj.cropId = this.formValueCrop.value.cropId;
    this.cropObj.cropName = this.formValueCrop.value.cropName;
    this.cropObj.cropPrice = this.formValueCrop.value.cropPrice;
    this.cropObj.cropQty = this.formValueCrop.value.cropQty;
    this.cropObj.farmerId = this.formValueCrop.value.farmerId;
    this.cropObj.cropType = this.formValueCrop.value.cropType;
    this.cropObj.cropDesc = this.formValueCrop.value.cropDesc;
    this.cropObj.cropImgUrl = this.formValueCrop.value.cropImgUrl;
    if (this.cropObj != null) {
      this.adminService.Addcrop(this.cropObj).subscribe();
    }
    this.getMyCrops();
    this.ngOnInit();
  }

  // Function to edit crop
  editCrop(data: any) {
    console.log(data);
    this.formValueCrop.controls['farmerId'].setValue(data.farmerId);
    this.formValueCrop.controls['cropId'].setValue(data.cropId);
    this.formValueCrop.controls['cropName'].setValue(data.cropName);
    this.formValueCrop.controls['cropQty'].setValue(data.cropQty);
    this.formValueCrop.controls['cropType'].setValue(data.cropType);
    this.formValueCrop.controls['cropPrice'].setValue(data.cropPrice);
    this.formValueCrop.controls['cropDesc'].setValue(data.cropDesc);
    this.formValueCrop.controls['cropImgUrl'].setValue(data.cropImgUrl);

  }

  // Function to update crop
  updateCrop() {
    this.cropObj.farmerId = this.formValueCrop.value.farmerId;
    this.cropObj.cropId = this.formValueCrop.value.cropId;
    this.cropObj.cropName = this.formValueCrop.value.cropName;
    this.cropObj.cropQty = this.formValueCrop.value.cropQty;
    this.cropObj.cropType = this.formValueCrop.value.cropType;
    this.cropObj.cropPrice = this.formValueCrop.value.cropPrice;
    this.cropObj.cropDesc = this.formValueCrop.value.cropDesc;
    this.cropObj.cropImgUrl = this.formValueCrop.value.cropImgUrl;

    this.adminService.updateCrop(this.cropObj).subscribe(res => {
      console.log("updated crop succesfully")

    });
    
    this.getMyCrops();
    this.ngOnInit();
  }

  // Function to get users orders
  getMyOrders() {
    this.myService.getFarmerOrders(this.loggeduser.userId).subscribe(res => {
      this.MyOrders = res;
      console.log(this.MyOrders);
    })
  }

  // Function to change order
  changeOrderStatus(order: orderModel, status: String) {
    this.orderObj.orderID = order.orderID;
    this.orderObj.cropID = order.cropID;
    this.orderObj.cropName = order.cropName;
    this.orderObj.dealerID = order.dealerID;
    this.orderObj.dealerName = order.dealerName;
    this.orderObj.dealerMobile = order.dealerMobile;
    this.orderObj.farmerID = order.farmerID;
    this.orderObj.farmerName = order.farmerName;
    this.orderObj.farmerMobile = order.farmerMobile;
    this.orderObj.orderAmount=order.orderAmount;
    this.orderObj.orderStatus = status;
    this.dealerService.addOrder(this.orderObj).subscribe();
    this.getMyOrders();
  }

}
