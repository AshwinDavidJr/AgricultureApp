import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cropModel } from '../models/cropModel';

import { userModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  constructor(private http:HttpClient) { }

  currentUser:userModel=new userModel("","","","","","","");
  

  public getALLFarmers(){
    //console.log("in get all farmers service");
    
    return this.http.get<userModel[]>("http://localhost:8088/getbyusertype/Farmer");
   
    
  }



public getALLDealers(){
  console.log("in getall dealer");
  
  return this.http.get<userModel[]>("http://localhost:8100/USERMICROSERVICE/getbyusertype/Dealer");
}

public Adduser(user:userModel){
  return this.http.post<userModel>("http://localhost:8100/USERMICROSERVICE/adduser",user);
}

public updateUser(user:userModel,id:String){
  return this.http.post<userModel>("http://localhost:8100/USERMICROSERVICE/update/"+id,user);
}

public DeleteFarmer(userId:String){
  return this.http.delete("http://localhost:8100/USERMICROSERVICE/delete/"+userId);
}

public getALLCrops(){
  console.log("in get crop method");

  return this.http.get<cropModel[]>("http://localhost:8100/CROPMICROSERVICE/crop/getall");
 
  
}
public authenticateUser(currentUser:userModel){
  return this.http.get<userModel>("http://localhost:8100/USERMICROSERVICE/Authenticate/"+currentUser.userName)
}


// Crop services-----------------------------------------
public Addcrop(crop:cropModel){
  return this.http.post<cropModel>("http://localhost:8100/CROPMICROSERVICE/crop/addCrop/"+crop.farmerId,crop);
}
public updateCrop(crop:cropModel){
  return this.http.put<cropModel>("http://localhost:8100/CROPMICROSERVICE/crop/update/"+crop.cropId,crop);
}
public DeleteCrop(cropId:string){
  return this.http.delete("http://localhost:8100/CROPMICROSERVICE/crop/delete/"+cropId);
  
}



 public setCurrentUser(res:any){
   this.currentUser=res;
 }

 public getUserById(id:any){
  return this.http.get<userModel>("http://localhost:8100/USERMICROSERVICE/getById/"+id);
}
}

