import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
