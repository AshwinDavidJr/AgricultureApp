package com.AgricultureApp.OrderService.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Orders")
public class Orders {
	@Id
	private String orderID;
	private String dealerID;
	private String farmerID;
	private String cropID;
	
	
	
	public Orders() {
		super();
	}
	public Orders(String orderID, String dealerID, String farmerID, String cropID) {
		super();
		this.orderID = orderID;
		this.dealerID = dealerID;
		this.farmerID = farmerID;
		this.cropID = cropID;
	}
	public String getOrderID() {
		return orderID;
	}
	public void setOrderID(String orderID) {
		this.orderID = orderID;
	}
	public String getDealerID() {
		return dealerID;
	}
	public void setDealerID(String dealerID) {
		this.dealerID = dealerID;
	}
	public String getFarmerID() {
		return farmerID;
	}
	public void setFarmerID(String farmerID) {
		this.farmerID = farmerID;
	}
	public String getCropID() {
		return cropID;
	}
	public void setCropID(String cropID) {
		this.cropID = cropID;
	}
	
	

}
