import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { orderModel } from '../models/Orders';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor(private http:HttpClient) { }

  public getMyOrders(dealerID:String){
    return this.http.get<orderModel[]>("http://localhost:8087/getOrderByDealer/"+dealerID);
  }


  public addOrder(order:orderModel){
    return this.http.post("http://localhost:8087/addOrder",order);
  }

}
