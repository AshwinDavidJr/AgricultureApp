package com.farmer.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.farmer.model.FarmUser;

public interface FarmUserRepository extends MongoRepository<FarmUser,String> {

//	FarmUser findByFarmerEmail(String farmerEmail);

	FarmUser findByfarmerUsername(String farmerUsername);
	FarmUser findByfarmerUsernameEquals(String farmerUsername);

//	FarmUser findByFarmer_UsernameEquals(String farmer_username);

	//FarmUser findByFarmer_UsernameEquals(String farmer_username);

	
}
