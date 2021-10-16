package com.dealer.model;

//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;


public class FarmUser {
	
	//@Id
	private String id;
	//@Id
	private String username;
	private String password;
	
	
	public FarmUser() {
		// TODO Auto-generated constructor stub
	}


	public FarmUser(String username, String password) {
		super();
		//this.id = id;
		this.username = username;
		this.password = password;
	}


	public String getId() {
		return id;
	}


//	public void setId(String id) {
//		this.id = id;
//	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "FarmUser [id=" + id + ", username=" + username + ", password=" + password + "]";
	}
	
	
	
	

}
