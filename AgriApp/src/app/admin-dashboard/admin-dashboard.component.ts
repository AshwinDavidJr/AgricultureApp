import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { farmer } from '../farmer';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  
  FarmersList:farmer[]=[];
  constructor(private breakpointObserver: BreakpointObserver) {}


  ngOnInit(): void {
    
  }



  viewFarmers(){
    
    console.log("fetching Farmers from farmer microservice");
    
    
  }
}
