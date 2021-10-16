package com.farmer.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("FarmUser")
public class FarmUser {
	
	@Id
	private String id;
	//@Id
	private String farmerUsername;
	private String farmerName;
	private String farmerEmail;
	private String farmerContactNo;
	private location farmerLocation;
	private bankDetails bankDetails;
	private String farmerPassword;
	
	public FarmUser() {
		// TODO Auto-generated constructor stub
	}

	public FarmUser(String id, String farmerUsername, String farmerEmail, String farmerContactNo,
			location farmerLocation, com.farmer.model.bankDetails bankDetails, String farmerPassword) {
		super();
		this.id = id;
		this.farmerUsername = farmerUsername;
		this.farmerEmail = farmerEmail;
		this.farmerContactNo = farmerContactNo;
		this.farmerLocation = farmerLocation;
		this.bankDetails = bankDetails;
		this.farmerPassword = farmerPassword;
	}
	
	



	public String getFarmerPassword() {
		return farmerPassword;
	}

	public void setFarmerPassword(String farmerPassword) {
		this.farmerPassword = farmerPassword;
	}
	
	

	public FarmUser(String id, String farmerUsername, String farmerName, String farmerEmail, String farmerContactNo,
			location farmerLocation, com.farmer.model.bankDetails bankDetails, String farmerPassword) {
		super();
		this.id = id;
		this.farmerUsername = farmerUsername;
		this.farmerName = farmerName;
		this.farmerEmail = farmerEmail;
		this.farmerContactNo = farmerContactNo;
		this.farmerLocation = farmerLocation;
		this.bankDetails = bankDetails;
		this.farmerPassword = farmerPassword;
	}

	public FarmUser(String id, String farmerUsername, String farmerEmail, String farmerContactNo,
			location farmerLocation, com.farmer.model.bankDetails bankDetails) {
		super();
		this.id = id;
		this.farmerUsername = farmerUsername;
		this.farmerEmail = farmerEmail;
		this.farmerContactNo = farmerContactNo;
		this.farmerLocation = farmerLocation;
		this.bankDetails = bankDetails;
	}
	
	

	public FarmUser(String id, String farmerUsername, String farmerEmail, String farmerContactNo) {
		super();
		this.id = id;
		this.farmerUsername = farmerUsername;
		this.farmerEmail = farmerEmail;
		this.farmerContactNo = farmerContactNo;
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFarmerUsername() {
		return farmerUsername;
	}

	public void setFarmerUsername(String farmerUsername) {
		this.farmerUsername = farmerUsername;
	}

	public String getFarmerEmail() {
		return farmerEmail;
	}

	public void setFarmerEmail(String farmerEmail) {
		this.farmerEmail = farmerEmail;
	}

	public String getFarmerContactNo() {
		return farmerContactNo;
	}

	public void setFarmerContactNo(String farmerContactNo) {
		this.farmerContactNo = farmerContactNo;
	}

	public location getFarmerLocation() {
		return farmerLocation;
	}

	public void setFarmerLocation(location farmerLocation) {
		this.farmerLocation = farmerLocation;
	}

	public bankDetails getBankDetails() {
		return bankDetails;
	}

	public void setBankDetails(bankDetails bankDetails) {
		this.bankDetails = bankDetails;
	}

	//while testing
	public FarmUser(String farmerUsername, String farmerEmail) {
		super();
		this.farmerUsername = farmerUsername;
		this.farmerEmail = farmerEmail;
	}

	public String getFarmerName() {
		return farmerName;
	}

	public void setFarmerName(String farmerName) {
		this.farmerName = farmerName;
	}
	
	
	


	
	
	

}
