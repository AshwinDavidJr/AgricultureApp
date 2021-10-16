package com.AgricultureApp.Admin_MicroserviceAPI.resources;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.AgricultureApp.Admin_MicroserviceAPI.models.CropModel;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	RestTemplate restTemplate;	
	
	
	
	@RequestMapping("")
	public String Test() {
		return "HelloWorld";
	}
	
	
	
	
	
	@RequestMapping("/getAllCrops")
	public List<CropModel> getAllCrops(){
		
		
				
		return Arrays.asList(restTemplate.getForObject("http://CropMicroservice/crop/getall",CropModel[].class));
		
	}
	

	  @RequestMapping("/delete/{cropId}") public Boolean
	  deleteCropById(@PathVariable String cropId) {
	  restTemplate.delete("http://CropMicroservice/crop/delete/"+cropId); 
	  return true;
	  
	  }
	 
	

	
	  @PostMapping("/addCrop/{farmerId}") 
	  public String addCrop(@PathVariable String farmerId,@RequestBody CropModel Crop) {
	  String msg = restTemplate.postForObject("http://CropMicroservice/crop/addCrop/"+farmerId,Crop,String.class); 
	  return msg;
	  }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	 * @RequestMapping("/delete/{cropId}") public Boolean
	 * deleteCropById(@PathVariable String cropId) {
	 * restTemplate.delete("http://CropMicroservice/crop/delete/"+cropId); return
	 * true;
	 * 
	 * }
	 */
	
	

}
