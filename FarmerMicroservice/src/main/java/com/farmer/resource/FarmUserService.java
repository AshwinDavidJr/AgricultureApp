package com.farmer.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.farmer.model.FarmUser;
import com.farmer.repository.FarmUserRepository;

@Service
public class FarmUserService {
	
	@Autowired
	private FarmUserRepository farmUserRepo;
	
	public FarmUser create(String farmerUsername, String farmerPassword) {
		return farmUserRepo.save(new FarmUser(farmerUsername,farmerPassword));
	}
	
	public List<FarmUser> getall(){
		return farmUserRepo.findAll();
	}

	public Optional<FarmUser> findById(String id) {
		// TODO Auto-generated method stub
		return farmUserRepo.findById(id);
	}

	public String addfarmer(FarmUser farmer) {
		// TODO Auto-generated method stub
		farmUserRepo.save(farmer);
		return  "Added farmer with id " + farmer.getId();
	}

	public String deletefarmer(String id) {
		// TODO Auto-generated method stub
		farmUserRepo.deleteById(id);
		return "farmer deleted havin id " + id;
	}
	

//	public FarmUser getByUsername(String username) {
//		return farmUserRepo.findByUsernameEquals(username);
//	}

	public FarmUser getByUsername(String farmerUsername) {
		// TODO Auto-generated method stub
		return farmUserRepo.findByfarmerUsername(farmerUsername);
	}

	public String update(FarmUser farmer) {
		farmUserRepo.save(farmer);
		return "famer updated succesfully"+farmer.getId();
	}

	public String updatebyusername(FarmUser farmer) {
		farmer = farmUserRepo.findByfarmerUsername(null);
		farmUserRepo.save(farmer);
		return null;
	}

//	public String updatebyusername(FarmUser farmer) {
//		farmUserRepo.save(farmer);
//		return "updated succesfully "+farmer.getId();
//	}
//	

}
