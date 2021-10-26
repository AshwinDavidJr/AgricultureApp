import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AdminServicesService } from '../admin-services.service';
import { userModel } from '../userModel';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  
  FarmerList:userModel[]=[];
  DealerList:userModel[]=[];
  //CropList:userModel[]=[];
  constructor(private breakpointObserver: BreakpointObserver, private adminService:AdminServicesService) {}


  ngOnInit(): void {
    this.adminService.getALLFarmers().subscribe(res=>{this.FarmerList=res});
    this.adminService.getALLDealers().subscribe(res=>{this.DealerList=res});
    //this.adminService.getALLFarmers().subscribe(res=>{this.FarmerList=res});
    
    
  }



  viewFarmers(){
    
    console.log("fetching Farmers from farmer microservice");
    
    
  }
}
