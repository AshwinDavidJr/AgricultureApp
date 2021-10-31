import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { orderModel } from '../models/Orders';
import { paymentModel } from '../models/paymentModal';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor(private http:HttpClient) { }

  public getMyOrders(dealerID:String){
    return this.http.get<orderModel[]>("http://localhost:8100/ORDERMICROSERVICE/getOrderByDealer/"+dealerID);
  }


  public addOrder(order:orderModel){
    return this.http.post("http://localhost:8100/ORDERMICROSERVICE/addOrder",order);
  }

  public makePayment(payment:paymentModel){
    return this.http.post("http://localhost:8100/PAYMENTMICROSERVICE/addPayment",payment)
  }
}
