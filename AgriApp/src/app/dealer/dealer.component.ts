import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { cropModel } from '../models/cropModel';
import { userModel } from '../models/userModel';
import { AdminServicesService } from '../Services/admin-services.service';
@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent implements OnInit {

currentUser:userModel=new userModel("","","","","","","");
  
  faCoffee = faCoffee;
  constructor(private adminService:AdminServicesService) { }
  CropList:cropModel[]=[];

  ngOnInit(): void {
    
    this.currentUser = this.adminService.currentUser;
    console.log(this.adminService.currentUser);
    
    this.adminService.getALLCrops().subscribe(res=>{this.CropList=res});

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
