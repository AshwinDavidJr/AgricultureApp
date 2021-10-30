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

  farmerList:userModel[]=[];
  searchedKeyword!: string;
  currentFarmer:userModel=new userModel("","","","","","","");
  currentCrop:cropModel=new cropModel("","","",0,"","","","");

currentUser:userModel=new userModel("","","","","","","");
  
  faCoffee = faCoffee;
  constructor(private adminService:AdminServicesService) { }
  CropList:cropModel[]=[];
  loggeduser:userModel=new userModel("","","","","","","");
  //crop:cropModel=new cropModel("","","",0,"","","","");

  ngOnInit(): void {
    
this.loggeduser=JSON.parse(sessionStorage.loggedUser);
console.log(this.loggeduser);

    this.currentUser = this.adminService.currentUser;
    // console.log(this.adminService.currentUser);
    
    this.adminService.getALLCrops().subscribe(res=>{this.CropList=res
      sessionStorage.setItem('croplist', JSON.stringify(this.CropList));
    
    });

    
    this.CropList=JSON.parse(sessionStorage.croplist);
    //console.log(this.CropList);
    
    
    //let crop = this.CropList[1];
    //console.log(crop);
    
    for(let crop of this.CropList){
        this.adminService.getUserById(crop.farmerId).subscribe(res=>{
          if(res!=null)
            if(this.checkIfpresent(res))
                this.farmerList.push(res)  
          sessionStorage.setItem('FarmerList',JSON.stringify(this.farmerList))           
        })
           
    }

    sessionStorage.removeItem('croplist')
    this.farmerList=JSON.parse(sessionStorage.FarmerList);
    console.log(this.farmerList);
    
  }

  checkIfpresent(data:userModel){
    for(let x of this.farmerList){
      if(data.userName==x.userName)
        return false;
    }
    return true;
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}




// ----------------------------------------------------------------
getFarmer(crop:cropModel){
  this.currentCrop=crop;
  this.adminService.getUserById(crop.farmerId).subscribe(res=>{
    if(res==null)
    this.currentFarmer=new userModel("","","","","","","")
    else
    this.currentFarmer=res;
  })
}
}
