import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cropModel } from './cropModel';
import { userModel } from './userModel';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  constructor(private http:HttpClient) { }

  public getALLFarmers(){
    //console.log("in get all farmers service");
    
    return this.http.get<userModel[]>("http://localhost:8088/getbyusertype/Farmer");
   
    
  }



public getALLDealers(){
  console.log("in getall dealer");
  
  return this.http.get<userModel[]>("http://localhost:8088/getbyusertype/Dealer");
}

public Adduser(user:userModel){
  return this.http.post<userModel>("http://localhost:8088/adduser",user);
}

public updateUser(user:userModel,id:String){
  return this.http.post<userModel>("http://localhost:8088/update/"+id,user);
}

public DeleteFarmer(userId:String){
  return this.http.delete("http://localhost:8088/delete/"+userId);
}

public getALLCrops(){
  console.log("in get crop method");

  return this.http.get<cropModel[]>("http://localhost:8084/crop/getall");
 
  
}
}
