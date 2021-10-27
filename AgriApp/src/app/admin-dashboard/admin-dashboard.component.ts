import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AdminServicesService } from '../admin-services.service';
import { userModel } from '../userModel';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { cropModel } from '../cropModel';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
 
  // dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject();
  //dtElement: DataTableDirective;
  // dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject();
  //dtElement: DataTableDirective;


  displayedColumns: string[] = ['farmerId', 'cropId', 'cropName', 'cropQty','cropType','Actions'];
  dataSource:any;

  formValue!:FormGroup;


  FarmerList:userModel[]=[];
  DealerList:userModel[]=[];
  userObj : userModel = new userModel();
  CropList:cropModel[]=[];
  result:any;
  
  constructor(private breakpointObserver: BreakpointObserver, private adminService:AdminServicesService, private fb:FormBuilder) {}


  ngOnInit(): void {

    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   processing: true,
    //   lengthMenu:[[5,10,20,25,50,-1],[5,10,20,25,50,"All"]]
    // };
    this.adminService.getALLFarmers().subscribe(res=>{this.FarmerList=res});
    this.adminService.getALLDealers().subscribe(res=>{this.DealerList=res});
    this.adminService.getALLCrops().subscribe(res=>{this.CropList=res});
  
    console.log(this.FarmerList.length);
    







    this.formValue=this.fb.group(
      {
        userName:[""],
        userEmail:[""],
        userId:[""],
        password:[""],
        location:[""],
        accountNo:[""],
        mobileNo:[""],
        userType:[""]
      }
    )
    
  }


  addUser(){
    console.log("in add user method");
    this.userObj.userName=this.formValue.value.userName;
    this.userObj.location=this.formValue.value.location;
    this.userObj.mobileNo=this.formValue.value.mobileNo;
    this.userObj.userType=this.formValue.value.userType;
    this.userObj.userEmail=this.formValue.value.userEmail;
    this.userObj.password=this.formValue.value.password;

    if(this.userObj.userType=="Farmer"){
      this.adminService.Adduser(this.userObj).subscribe(res=>{this.FarmerList.push(res)});
      console.log("user Added successfully");
    }
    else if(this.userObj.userType=="Dealer"){
      this.adminService.Adduser(this.userObj).subscribe(res=>{this.DealerList.push(res)});
      console.log("user Added successfully");
    }
    else
    alert("wrong UserType");
    
    
    this.ngOnInit();
  }

 
  editUser(data:any){
    this.userObj.userId=data.userId;
    this.formValue.controls['userName'].setValue(data.userName);
    this.formValue.controls['userEmail'].setValue(data.userEmail);
    this.formValue.controls['location'].setValue(data.location);
    this.formValue.controls['mobileNo'].setValue(data.mobileNo);
    this.formValue.controls['userType'].setValue("Farmer");
    
  }
  updateUser(){
    this.userObj.userName=this.formValue.value.userName;
    this.userObj.location=this.formValue.value.location;
    this.userObj.mobileNo=this.formValue.value.mobileNo;
    this.userObj.userType=this.formValue.value.userType;
    this.userObj.userEmail=this.formValue.value.userEmail;
    this.adminService.updateUser(this.userObj,this.userObj.userId).subscribe(res=>{
      console.log("updated user successfully")
    });
    this.ngOnInit();
  }

  deleteFarmer(userId:String){
    
    console.log("in delete method")
    this.adminService.DeleteFarmer(userId).subscribe(res=>{this.result=res});
   console.log("deleted User")
    this.ngOnInit();
    
    
  }
}
