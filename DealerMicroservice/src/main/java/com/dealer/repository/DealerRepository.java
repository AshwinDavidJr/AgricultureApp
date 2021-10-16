package com.dealer.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.dealer.model.Dealer;


public interface DealerRepository extends MongoRepository<Dealer,String> {

	Dealer findBydealerUsername(String dealerUsername);

	
	
}
