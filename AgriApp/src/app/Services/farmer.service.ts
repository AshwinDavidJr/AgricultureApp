import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cropModel } from '../models/cropModel';
import { orderModel } from '../models/Orders';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http:HttpClient) { }



  getMyCrops(farmerId:String){

    return this.http.get<cropModel[]>("http://localhost:8100/CROPMICROSERVICE/crop/getall/"+farmerId);
  }

  public getFarmerOrders(farmerID:String){
    return this.http.get<orderModel[]>("http://localhost:8100/ORDERMICROSERVICE/getOrderByFarmer/"+farmerID);
  }
}
