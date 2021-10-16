package com.farmer.resource;
import com.farmer.model.CropModel;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import com.farmer.model.FarmUser;
import com.farmer.repository.FarmUserRepository;

@RestController
public class FarmController {
	RestTemplate restTemplate = new RestTemplate();

	@Autowired
	FarmUserService farmUserService;
	
	@Autowired
	private FarmUserRepository farmUserRepo;
	
//	@Autowired
//	private FarmUserRepository farmUserRepo;
	
	//just created for simply adding only username and password
	@RequestMapping("/create")
	public String create(@RequestParam String farmerUsername, @RequestParam String farmerPassword) {
		FarmUser u = farmUserRepo.save(new FarmUser(farmerUsername,farmerPassword));
		return u.toString();
	}
	
	@RequestMapping("/getall")
	public List<FarmUser> getAll(){
		return farmUserRepo.findAll();
	}
	
	@GetMapping("/findfarmer/{id}")
	public Optional<FarmUser> getfarmer(@PathVariable String id) {
		return farmUserService.findById(id);
	}
	
	//adding a new farmer
	@PostMapping("/addfarmer")
	public String addfarmer(@RequestBody FarmUser farmer) {
		return farmUserService.addfarmer(farmer);
	}
	
	@DeleteMapping("delete/{id}")
	public String deleteFarmer(@PathVariable String id) {
		
		return farmUserService.deletefarmer(id);
	}
	
	@RequestMapping("/get/{farmerUsername}")
	public FarmUser getUsers(@PathVariable String farmerUsername) {
		return farmUserService.getByUsername(farmerUsername);
	}
	
	@PostMapping("/update/{id}")
	public String update(@PathVariable String id , @RequestBody FarmUser farmer) {
		farmer.setId(id);
		return farmUserService.update(farmer);
	}
	
	
	
	//FArMER functionalities on his CROP
	//------------------------------------------------------------------------
	@RequestMapping("/getAllCrops/{farmerId}")
	public List<CropModel> getAllCropsByFarmer(@PathVariable String farmerId) {
		return Arrays.asList(restTemplate.getForObject("http://CropMicroservice/crop/getall"+farmerId, CropModel[].class));

	}
	
	
	@PutMapping("/updateCrop/{cropId}")
	public Boolean UpdateCrop(@PathVariable String cropId, @RequestBody CropModel Crop) {
		restTemplate.put("http://CropMicroservice/crop/update/" + cropId, Crop);
		return true;
	}
	
	@RequestMapping("/deleteCrop/{cropId}")
	public Boolean deleteCropById(@PathVariable String cropId) {
		restTemplate.delete("http://CropMicroservice/crop/delete/" + cropId);
		return true;

	}
	
	//Functionality to be added
//	@PutMapping("/update/username/{farmerUsername}")
//	public String updatebyusernamee(@PathVariable String farmerUsername , @RequestBody FarmUser farmer) {
//		FarmUser f1 = farmUserRepo.findByfarmerUsernameEquals(farmerUsername);
//		return farmUserService.updatebyusername(farmer);
//	}
}
